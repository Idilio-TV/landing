import { NextResponse } from "next/server";

export const runtime = "edge";

const iosAppStoreUrl = "https://apps.apple.com/app/id6749875422";
const androidPlayStoreUrl =
  "https://play.google.com/store/apps/details?id=com.stvrae.idilio";
const fallbackUrl = "https://idilio.tv";

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

  const type = url.searchParams.get("type") || "show";
  const targetId = url.searchParams.get("targetId") || "";

  const ua = req.headers.get("user-agent") || "";

  const allParams: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    allParams[key] = value;
  });

  const forced = url.searchParams.get("device");
  const device =
    forced === "ios" || forced === "android" ? forced : detectDevice(ua);

  const payload = {
    path: `/${locale}/${type}/${targetId}`,
    locale,
    type,
    target_id: targetId,
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

  // Await log so it runs before redirect (Edge tears down after response otherwise)
  const supabaseUrl = process.env.SUPABASE_URL;
  if (supabaseUrl) {
    const logPromise = fetch(
      `${supabaseUrl}/rest/v1/deep_link_pending`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      }
    ).catch(() => null);
    const timeout = new Promise((resolve) => setTimeout(resolve, 3000));
    await Promise.race([logPromise, timeout]);
  }

  return NextResponse.redirect(destination, { status: 302 });
}
