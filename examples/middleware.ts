import { NextResponse, NextRequest } from 'next/server';

const constants = {
  EXTERNAL_REWRITING_MAP: {},
  B2B_PATHS: [],
};

const environment = {
  B2B_HOST: 'b2b.example.com',
  GATSBY_HOST: 'gatsby.example.com',
  NODE_ENV: 'development',
};

const protocol = environment.NODE_ENV === 'development' ? 'http' : 'https';

export async function middleware(request: NextRequest) {
  const currentPathname = request.nextUrl.pathname;
  const currentSearch = request.nextUrl.search || '';
  const host = request.nextUrl.host;

  const externalRewritingHost =
    constants.EXTERNAL_REWRITING_MAP[host as keyof typeof constants.EXTERNAL_REWRITING_MAP];

  if (externalRewritingHost) {
    const newUrl = new URL(`${currentPathname}${currentSearch}`, `${externalRewritingHost}`);

    return NextResponse.rewrite(newUrl);
  }

  if (constants.B2B_PATHS.find(currentPath => currentPathname.includes(currentPath))) {
    const newUrl = new URL(currentPathname, `${protocol}://${environment.B2B_HOST}`);

    return NextResponse.rewrite(newUrl, { request: { headers: request.headers } });
  }

  const newUrl = new URL(currentPathname, `${protocol}://${environment.GATSBY_HOST}`);

  return NextResponse.rewrite(newUrl, {
    request: { headers: request.headers },
  });
}

export const config = {
  matcher: '/((?!api|health|slack-webhooks).*)',
};
