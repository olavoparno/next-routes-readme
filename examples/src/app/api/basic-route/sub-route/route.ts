import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  const subRoute = request.nextUrl.pathname;

  return NextResponse.json({
    message: `Hello from sub-route ${subRoute}!`,
  });
}
