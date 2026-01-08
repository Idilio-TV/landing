import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export const dynamic = 'force-dynamic';

export async function GET() {
  const cookieStore = cookies();
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

export async function DELETE() {
  return NextResponse.json(
    { success: true },
    {
      headers: {
        'Set-Cookie': 'pending_deep_link=; Max-Age=0; Path=/',
      },
    },
  );
}
