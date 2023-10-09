import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.rewrite(new URL('/rewritten', 'https://www.google.com'), { status: 200 });
}
