import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { dynamicRoute: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('myQueryValue');
  const dynamicRoute = params.dynamicRoute;

  return NextResponse.json({
    message: `Hello from dynamicRoute slug ${dynamicRoute} with query ${query}!`,
  });
}
