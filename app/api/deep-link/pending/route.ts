import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

const SEVEN_DAYS_SECONDS = 7 * 24 * 60 * 60;

export const dynamic = 'force-dynamic';

/**
 * Helper function to get user IP address
 */
function getIP(request: NextRequest): string | null {
  // Try Vercel-specific headers first
  const vercelIP = request.headers.get('x-vercel-forwarded-for');
  if (vercelIP) return vercelIP;

  // Try standard forwarded-for header
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const ips = forwardedFor.split(',');
    return ips[0].trim();
  }

  // Try real-ip header
  const realIP = request.headers.get('x-real-ip');
  if (realIP) return realIP;

  // Try remote address
  const remoteAddr = request.headers.get('remote-addr');
  if (remoteAddr) return remoteAddr;

  return null;
}

/**
 * GET /api/deep-link/pending
 * Retrieves and consumes a pending deep link for the user's IP address
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getIP(request);

    if (!ip) {
      console.log('[API] Could not determine IP address');
      return NextResponse.json({ pending: null }, { status: 200 });
    }

    console.log('[API] Getting pending deep link for IP:', ip);

    const supabase = getSupabaseClient();

    // Call RPC to get and consume deep link atomically
    const { data, error } = await supabase.rpc('get_and_consume_deep_link', {
      p_ip_address: ip,
    });

    if (error) {
      console.error('[API] Error calling get_and_consume_deep_link:', error);
      return NextResponse.json({ pending: null }, { status: 200 });
    }

    if (!data || !data.found) {
      console.log('[API] No pending deep link found for IP:', ip);
      return NextResponse.json({ pending: null }, { status: 200 });
    }

    console.log('[API] Found pending deep link:', data.deep_link_data);
    return NextResponse.json({ pending: data.deep_link_data }, { status: 200 });
  } catch (error) {
    console.error('[API] Error in GET /api/deep-link/pending:', error);
    return NextResponse.json({ pending: null }, { status: 500 });
  }
}

/**
 * POST /api/deep-link/pending
 * Stores a pending deep link for the user's IP address
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const ip = getIP(request);

    if (!ip) {
      console.error('[API] Could not determine IP address');
      return NextResponse.json(
        { error: 'Could not determine IP address' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.path || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields: path, type' },
        { status: 400 }
      );
    }

    console.log('[API] Saving pending deep link for IP:', ip, body);

    const supabase = getSupabaseClient();

    // Call RPC to set pending deep link
    const { error } = await supabase.rpc('set_pending_deep_link', {
      p_ip_address: ip,
      p_deep_link_data: {
        path: body.path,
        targetId: body.targetId,
        type: body.type,
        utm_source: body.utm_source,
        utm_medium: body.utm_medium,
        utm_campaign: body.utm_campaign,
        utm_content: body.utm_content,
        utm_term: body.utm_term,
      },
      p_expires_in_seconds: SEVEN_DAYS_SECONDS,
    });

    if (error) {
      console.error('[API] Error calling set_pending_deep_link:', error);
      return NextResponse.json(
        { error: 'Failed to save deep link' },
        { status: 500 }
      );
    }

    console.log('[API] Successfully saved pending deep link');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[API] Error in POST /api/deep-link/pending:', error);
    return NextResponse.json(
      { error: 'Failed to save deep link' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/deep-link/pending
 * Not needed anymore - get_and_consume_deep_link already deletes atomically
 * Kept for backward compatibility
 */
export async function DELETE() {
  return NextResponse.json({ success: true }, { status: 200 });
}
