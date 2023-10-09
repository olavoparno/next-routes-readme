import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { dynamicRouteA: string; dynamicRouteB: string } }
) {
  const { dynamicRouteA, dynamicRouteB } = params;

  return NextResponse.json({
    message: `Hello from dynamicRoute slugA ${dynamicRouteA} and slugB ${dynamicRouteB}!`,
  });
}
