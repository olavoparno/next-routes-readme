import * as Sentry from '@sentry/nextjs';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const USER_SESSION_ID_COOKIE_NAME = 'COOKIE_NAME';

type HandlerFunction = (request: NextRequest, ...args: unknown[]) => Promise<Response>;

/**
 * Middleware that sets the user session in Sentry.
 * @example
 * ```ts
 * export const GET = withRouteMiddleware(async () => {
 *   const response = await getSomeData()
 *   return NextResponse.json(response)
 * })
 * ```
 * @warning This middleware ONLY works for non static routes as it reads the user session from cookies.
 */
export function withRouteMiddleware(fn: HandlerFunction): HandlerFunction {
  return async function (request: NextRequest, ...args: unknown[]): Promise<Response> {
    const userSession = cookies().get(USER_SESSION_ID_COOKIE_NAME)?.value;

    if (userSession) {
      Sentry.setUser({
        id: userSession,
        idType: 'session',
      });
    }

    return await fn(request, ...args);
  };
}
