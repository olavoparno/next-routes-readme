import 'server-only';

import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { withRouteMiddleware } from '../../../../utils/server/serverWrappers/withRouteMiddleware';

export const dynamic = 'force-dynamic';

async function apiResponse() {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureMessage('Someone tried to access the wiped database detection API in production');
    return { state: 'ok' as const };
  }
  const authUser = await Promise.resolve({
    userId: '1',
    email: 'test@test.com',
  });
  if (!authUser) {
    return { state: 'unauthenticated' as const };
  }
  const correspondingUser = await Promise.resolve({
    userId: '1',
    email: 'test@test.com',
  });
  if (!correspondingUser) {
    return { state: 'wiped-database' as const };
  }
  return { state: 'ok' as const };
}

export type DetectWipedDatabaseResponse = Awaited<ReturnType<typeof apiResponse>>;

export const POST = withRouteMiddleware(async () => {
  const response = await apiResponse();
  return NextResponse.json(response);
});
