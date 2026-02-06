import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export const runtime = "edge";

const SEVEN_DAYS_SECONDS = 7 * 24 * 60 * 60;

const iosAppStoreUrl = "https://apps.apple.com/app/id6749875422";
const androidPlayStoreUrl =
  "https://play.google.com/store/apps/details?id=com.stvrae.idilio";
const fallbackUrl = "https://idilio.tv";

function getIP(request: Request): string | null {
  const vercelIP = request.headers.get("x-vercel-forwarded-for");
  if (vercelIP) return vercelIP;
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP;
  const remoteAddr = request.headers.get("remote-addr");
  if (remoteAddr) return remoteAddr;
  return null;
}

function detectDevice(ua: string) {
  const s = ua.toLowerCase();
  if (s.includes("android")) return "android";
  if (/(iphone|ipad|ipod)/i.test(ua)) return "ios";
  return "unknown";
}

export async function GET(
  req: Request,
  ctx: { params: Promise<{ locale: string }> }
) {
  const { locale } = await ctx.params;
  const url = new URL(req.url);

  const type = url.searchParams.get("type") || "none";
  const targetId = url.searchParams.get("targetId") || "";

  const ua = req.headers.get("user-agent") || "";

  const utm_source = url.searchParams.get("utm_source") || "";
  const utm_medium = url.searchParams.get("utm_medium") || "";
  const utm_campaign = url.searchParams.get("utm_campaign") || "";
  const utm_content = url.searchParams.get("utm_content") || "";

  const allParams: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    allParams[key] = value;
  });

  const forced = url.searchParams.get("device");
  const device =
    forced === "ios" || forced === "android" ? forced : detectDevice(ua);

  const path = `/${locale}/${type}/${targetId}`;
  const deepLinkData = {
    path,
    type,
    targetId,
    locale,
    utm_source, 
    utm_medium, 
    utm_campaign, 
    utm_content,
    raw_url: url.toString(),
    device,
    user_agent: ua,
    params: allParams,
    created_at: new Date().toISOString(),
  };

  const destination =
    device === "ios"
      ? iosAppStoreUrl
      : device === "android"
        ? androidPlayStoreUrl
        : fallbackUrl;

  const ip = getIP(req);
  if (ip) {
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.rpc("set_pending_deep_link", {
        p_ip_address: ip,
        p_deep_link_data: deepLinkData,
        p_expires_in_seconds: SEVEN_DAYS_SECONDS,
      });
      if (error) {
        console.error("[go-to-app] set_pending_deep_link error:", error);
      }
    } catch (e) {
      console.error("[go-to-app] Supabase error:", e);
    }
  }

  return NextResponse.redirect(destination, { status: 302 });
}
