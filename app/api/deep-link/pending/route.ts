import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export const dynamic = 'force-dynamic';

export async function GET() {
  const cookieStore = await cookies();
  const pendingDeepLink = cookieStore.get('pending_deep_link');

  if (!pendingDeepLink) {
    return NextResponse.json({ pending: null });
  }

  try {
    const data = JSON.parse(decodeURIComponent(pendingDeepLink.value));
    const timestamp = new Date(data.timestamp).getTime();

    if (Number.isNaN(timestamp) || Date.now() - timestamp > SEVEN_DAYS_MS) {
      return NextResponse.json(
        { pending: null },
        {
          headers: {
            'Set-Cookie': 'pending_deep_link=; Max-Age=0; Path=/',
          },
        },
      );
    }

    return NextResponse.json({ pending: data });
  } catch {
    return NextResponse.json({ pending: null });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.path || !body.targetId || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields: path, targetId, type' },
        { status: 400 }
      );
    }

    // Add timestamp if not present
    const data = {
      ...body,
      timestamp: body.timestamp || new Date().toISOString(),
    };

    // Save in cookie
    const serialized = JSON.stringify(data);
    const cookieStore = await cookies();
    cookieStore.set('pending_deep_link', encodeURIComponent(serialized), {
      maxAge: 604800, // 7 days
      path: '/',
      httpOnly: false, // Allow client-side access
      sameSite: 'lax',
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to save deep link' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('pending_deep_link');
  
  return NextResponse.json({ success: true });
}
