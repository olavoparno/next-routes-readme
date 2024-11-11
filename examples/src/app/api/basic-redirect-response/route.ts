import { NextResponse } from 'next/server';

export async function GET() {
  if (Math.random() > 0.5) {
    return NextResponse.redirect(new URL('https://www.google.com'), 307);
  }

  return Response.redirect(new URL('/baidu', 'https://www.google.com'), 307);
}
