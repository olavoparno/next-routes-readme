import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  _: NextRequest,
  {
    params,
  }: {
    params: {
      dynamicRoute: string;
      subMultipleDynamicRoutes: [dynamicRouteA: string, dynamicRouteB: string];
    };
  }
) {
  const { dynamicRoute, subMultipleDynamicRoutes } = params;
  const [subDynamicRouteA, subDynamicRouteB] = subMultipleDynamicRoutes;

  return NextResponse.json({
    message: `Hello from ${dynamicRoute} with ${subDynamicRouteA} and ${subDynamicRouteB}!`,
  });
}
