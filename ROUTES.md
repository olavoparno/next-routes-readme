# Table of Contents

- [Route 1](#route-1-usersollidocumentsprojectsoldnext-routes-readmeexamplesappdynamicroutesubmultipledynamicroutesroutets)
- [Route 2](#route-2-usersollidocumentsprojectsoldnext-routes-readmeexamplesappdynamicrouteroutets)
- [Route 3](#route-3-usersollidocumentsprojectsoldnext-routes-readmeexamplesappanother-routeroutets)
- [Route 4](#route-4-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-healtcheckroutets)
- [Route 5](#route-5-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-healthcheck-jsroutets)
- [Route 6](#route-6-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-healthcheck-responseroutets)
- [Route 7](#route-7-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-redirect-responseroutets)
- [Route 8](#route-8-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-rewrite-responseroutets)
- [Route 9](#route-9-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-routeroutets)
- [Route 10](#route-10-usersollidocumentsprojectsoldnext-routes-readmeexamplesappbasic-routesub-routeroutets)
- [Route 11](#route-11-usersollidocumentsprojectsoldnext-routes-readmeexamplesappopen-airoutets)
- [Route 12](#route-12-usersollidocumentsprojectsoldnext-routes-readmeexamplesapproutets)
- [Route 13](#route-13-usersollidocumentsprojectsoldnext-routes-readmeexamplesmiddlewarets)
- [Route 14](#route-14-usersollidocumentsprojectsoldnext-routes-readmenodemodulesnextdistexperimentaltestmodeplaywrightpage-routejs)
- [Route 15](#route-15-usersollidocumentsprojectsoldnext-routes-readmenodemodulesnextdistexportroutesapp-routejs)
- [Route 16](#route-16-usersollidocumentsprojectsoldnext-routes-readmenodemodulesnext-authsrcnextmiddlewarets)
---
# Route 1: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts)

**Implementation**: `async function DELETE(_: NextRequest, { params }: { params: { dynamicRouteA: string; dynamicRouteB: string } })`  
**HTTP Method**: `DELETE`

**Variables**:

1. 
      - **Value**: `const { dynamicRouteA, dynamicRouteB } = params;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L7](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L7)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

1. 
      - **Value**: `...subMultipleDynamicRoutes`

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1)


---
# Route 2: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts)

**Implementation**: `async function DELETE(request: NextRequest, { params }: { params: { dynamicRoute: string } })`  
**HTTP Method**: `DELETE`

**Variables**:

1. 
      - **Value**: `const searchParams = request.nextUrl.searchParams;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L7](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L7)

2. 
      - **Value**: `const query = searchParams.get('myQueryValue');`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L8](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L8)

3. 
      - **Value**: `const dynamicRoute = params.dynamicRoute;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L9](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L9)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

1. 
      - **Value**: `myQueryValue`

**Route Params**:

1. 
      - **Value**: `dynamicRoute`

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/[dynamicRoute]/route.ts#L1)


---
# Route 3: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY || '',
    },
  });`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts#L2](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts#L2)

2. 
      - **Value**: `const data = await res.json();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts#L8](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/another-route/route.ts#L8)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*


---
# Route 4: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healtcheck/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healtcheck/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healtcheck/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healtcheck/route.ts#L1)


---
# Route 5: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-js/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-js/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-js/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-js/route.ts#L1)


---
# Route 6: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-response/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-response/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

1. 
      - **Value**: `new Response(JSON.stringify({ ok: false }), { status: 500 })`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-response/route.ts#L2](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-healthcheck-response/route.ts#L2)

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*


---
# Route 7: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

1. 
      - **Value**: `if (Math.random() > 0.5) {
    return NextResponse.redirect(new URL('https://www.google.com'), 307);
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L4](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L4)

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

1. 
      - **Value**: `https://www.google.com`
      - **Status**: `307`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L5](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L5)

2. 
      - **Value**: `https://www.google.com/baidu`
      - **Status**: `307`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L8](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L8)

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-redirect-response/route.ts#L1)


---
# Route 8: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

1. 
      - **Value**: `https://www.google.com/rewritten`
      - **Status**: `200`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts#L4](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts#L4)

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-rewrite-response/route.ts#L1)


---
# Route 9: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const cookieStore = cookies();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L4](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L4)

2. 
      - **Value**: `const token = cookieStore.get('token');`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L5](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L5)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

1. 
      - **Value**: `token`

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { cookies } from 'next/headers';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/route.ts#L1)


---
# Route 10: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts)

**Implementation**: `async function PUT(request: NextRequest)`  
**HTTP Method**: `PUT`

**Variables**:

1. 
      - **Value**: `const subRoute = request.nextUrl.pathname;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts#L4](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts#L4)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/basic-route/sub-route/route.ts#L1)


---
# Route 11: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts)

**Implementation**: `async function POST(req: Request)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const { messages } = await req.json();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L14](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L14)

2. 
      - **Value**: `const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L17](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L17)

3. 
      - **Value**: `const stream = OpenAIStream(response);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L29](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L29)

**Conditionals**:

*None*

**Comments**:

1. 
      - **Value**: `// Extract the `messages` from the body of the request`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L13](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L13)

2. 
      - **Value**: `// Request the OpenAI API for the response based on the prompt`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L16](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L16)

3. 
      - **Value**: `// Convert the response into a friendly text-stream`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L28](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L28)

4. 
      - **Value**: `// Respond with the stream`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L31](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L31)

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { Configuration, OpenAIApi } from 'openai-edge';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L1)

2. 
      - **Value**: `import { OpenAIStream, StreamingTextResponse } from 'ai';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L2](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/open-ai/route.ts#L2)


---
# Route 12: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts)

**Implementation**: `async function POST(request: NextRequest)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const {
      severity,
      message,
      functionName,
      gcpProject,
      serviceAccountEmail,
      serviceAccountKey,
      env,
    } = await request.json();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L5](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L5)

**Conditionals**:

1. 
      - **Value**: `if (
      !severity ||
      !message ||
      !functionName ||
      !gcpProject ||
      !serviceAccountEmail ||
      !serviceAccountKey ||
      !env
    ) {
      return NextResponse.json({ error: 'Invalid Request' }, { status: 500 });
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L15](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L15)

**Comments**:

1. 
      - **Value**: `// eslint-disable-next-line @typescript-eslint/no-explicit-any`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L27](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L27)

**Errors**:

1. 
      - **Value**: `NextResponse.json({ error: 'Invalid Request' }, { status: 500 })`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L24](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L24)

2. 
      - **Value**: `catch (error) {
    console.error('Error logging to GCP:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L31](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L31)

3. 
      - **Value**: `NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L33](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L33)

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/app/route.ts#L1)


---
# Route 13: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts)

**Implementation**: `async function middleware(request: NextRequest)`  
**HTTP Method**: `middleware`

**Variables**:

1. 
      - **Value**: `const currentPathname = request.nextUrl.pathname;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L17](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L17)

2. 
      - **Value**: `const currentSearch = request.nextUrl.search || '';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L18](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L18)

3. 
      - **Value**: `const host = request.nextUrl.host;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L19](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L19)

4. 
      - **Value**: `const externalRewritingHost =
    constants.EXTERNAL_REWRITING_MAP[host as keyof typeof constants.EXTERNAL_REWRITING_MAP];`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L21](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L21)

5. 
      - **Value**: `const newUrl = new URL(`${currentPathname}${currentSearch}`, `${externalRewritingHost}`);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L25](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L25)

6. 
      - **Value**: `const newUrl = new URL(currentPathname, `${protocol}://${environment.B2B_HOST}`);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L31](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L31)

7. 
      - **Value**: `const newUrl = new URL(currentPathname, `${protocol}://${environment.GATSBY_HOST}`);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L36](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L36)

8. 
      - **Value**: `const config = {
  matcher: '/((?!api|health|slack-webhooks).*)',
};`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L43](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L43)

**Conditionals**:

1. 
      - **Value**: `if (externalRewritingHost) {
    const newUrl = new URL(`${currentPathname}${currentSearch}`, `${externalRewritingHost}`);

    return NextResponse.rewrite(newUrl);
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L24](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L24)

2. 
      - **Value**: `if (constants.B2B_PATHS.find(currentPath => currentPathname.includes(currentPath))) {
    const newUrl = new URL(currentPathname, `${protocol}://${environment.B2B_HOST}`);

    return NextResponse.rewrite(newUrl, { request: { headers: request.headers } });
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L30](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L30)

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse, NextRequest } from 'next/server';`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/examples/middleware.ts#L1)


---
# Route 14: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js)

**Implementation**: `async function handleRoute(route, page, testHeaders, fetchHandler)`  
**HTTP Method**: `handleRoute`

**Variables**:

1. 
      - **Value**: `const request = route.request();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L20](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L20)

2. 
      - **Value**: `const pageOrigin = new URL(page.url()).origin;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L27](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L27)

3. 
      - **Value**: `const requestOrigin = new URL(request.url()).origin;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L28](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L28)

4. 
      - **Value**: `const postData = request.postDataBuffer();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L35](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L35)

5. 
      - **Value**: `const fetchRequest = new Request(request.url(), {
        method: request.method(),
        headers: Object.fromEntries(Object.entries(request.headers()).filter(([name])=>!name.toLowerCase().startsWith("next-test-"))),
        body: postData ?? null
    });`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L36](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L36)

6. 
      - **Value**: `const proxyResponse = await fetchHandler(fetchRequest);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L41](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L41)

7. 
      - **Value**: `const { status, headers, body } = proxyResponse;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L51](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L51)

**Conditionals**:

1. 
      - **Value**: `if (request.isNavigationRequest() || request.resourceType() !== "fetch") {
        return continueRoute(route, request, testHeaders);
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L22](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L22)

2. 
      - **Value**: `if (pageOrigin === requestOrigin) {
        return continueRoute(route, request, testHeaders);
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L29](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L29)

3. 
      - **Value**: `if (!fetchHandler) {
        return route.abort();
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L32](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L32)

4. 
      - **Value**: `if (!proxyResponse) {
        return route.abort();
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L42](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L42)

5. 
      - **Value**: `if (proxyResponse === "abort") {
        return route.abort();
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L45](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L45)

6. 
      - **Value**: `if (proxyResponse === "continue") {
        return continueRoute(route, request, testHeaders);
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L48](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L48)

7. 
      - **Value**: `body ? Buffer.from(await proxyResponse.arrayBuffer()) : undefined`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L55](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L55)

**Comments**:

1. 
      - **Value**: `// Continue the navigation and non-fetch requests.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L21](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L21)

2. 
      - **Value**: `// Continue the local requests. The followup requests will be intercepted`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L25](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L25)

3. 
      - **Value**: `// on the server.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L26](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/experimental/testmode/playwright/page-route.js#L26)

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*


---
# Route 15: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js)

**Implementation**: `async function exportAppRoute(req, res, params, page, incrementalCache, distDir, htmlFilepath)`  
**HTTP Method**: `exportAppRoute`

**Variables**:

1. 
      - **Value**: `const request = _nextrequest.NextRequestAdapter.fromNodeNextRequest(new _node.NodeNextRequest(req), (0, _nextrequest.signalFromNodeResponse)(res));`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L30](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L30)

2. 
      - **Value**: `const context = {
        params,
        prerenderManifest: {
            version: 4,
            routes: {},
            dynamicRoutes: {},
            preview: {
                previewModeEncryptionKey: "",
                previewModeId: "",
                previewModeSigningKey: ""
            },
            notFoundRoutes: []
        },
        staticGenerationContext: {
            originalPathname: page,
            nextExport: true,
            supportsDynamicHTML: false,
            incrementalCache
        }
    };`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L33](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L33)

3. 
      - **Value**: `const filename = (0, _path.join)(distDir, _constants1.SERVER_DIRECTORY, "app", page);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L58](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L58)

4. 
      - **Value**: `var _context_staticGenerationContext_store;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L60](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L60)

5. 
      - **Value**: `const module = await _routemoduleloader.RouteModuleLoader.load(filename);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L62](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L62)

6. 
      - **Value**: `const response = await module.handle(request, context);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L63](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L63)

7. 
      - **Value**: `const isValidStatus = response.status < 400 || response.status === 404;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L64](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L64)

8. 
      - **Value**: `const blob = await response.blob();`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L70](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L70)

9. 
      - **Value**: `const revalidate = ((_context_staticGenerationContext_store = context.staticGenerationContext.store) == null ? void 0 : _context_staticGenerationContext_store.revalidate) || false;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L71](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L71)

10. 
      - **Value**: `const headers = (0, _utils.toNodeOutgoingHttpHeaders)(response.headers);`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L72](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L72)

11. 
      - **Value**: `const cacheTags = context.staticGenerationContext.fetchTags;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L73](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L73)

12. 
      - **Value**: `const body = Buffer.from(await blob.arrayBuffer());`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L81](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L81)

13. 
      - **Value**: `const meta = {
            status: response.status,
            headers
        };`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L84](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L84)

**Conditionals**:

1. 
      - **Value**: `if (_ciinfo.hasNextSupport) {
        context.staticGenerationContext.isRevalidate = true;
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L53](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L53)

2. 
      - **Value**: `if (!isValidStatus) {
            return {
                fromBuildExportRevalidate: 0
            };
        }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L65](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L65)

3. 
      - **Value**: `(_context_staticGenerationContext_store = context.staticGenerationContext.store) == null ? void 0 : _context_staticGenerationContext_store.revalidate`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L71](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L71)

4. 
      - **Value**: `if (cacheTags) {
            headers[_constants.NEXT_CACHE_TAGS_HEADER] = cacheTags;
        }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L74](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L74)

5. 
      - **Value**: `if (!headers["content-type"] && blob.type) {
            headers["content-type"] = blob.type;
        }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L77](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L77)

6. 
      - **Value**: `if (!(0, _isdynamicusageerror.isDynamicUsageError)(err)) {
            throw err;
        }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L94](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L94)

**Comments**:

1. 
      - **Value**: `// Ensure that the URL is absolute.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L27](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L27)

2. 
      - **Value**: `// Adapt the request and response to the Next.js request and response.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L29](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L29)

3. 
      - **Value**: `// Create the context for the handler. This contains the params from`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L31](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L31)

4. 
      - **Value**: `// the route and the context for the request.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L32](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L32)

5. 
      - **Value**: `// This is a route handler, which means it has it's handler in the`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L56](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L56)

6. 
      - **Value**: `// bundled file already, we should just use that.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L57](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L57)

7. 
      - **Value**: `// Route module loading and handling.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L61](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L61)

8. 
      - **Value**: `// Writing response body to a file.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L80](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L80)

9. 
      - **Value**: `// Write the request metadata to a file.`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L83](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L83)

**Errors**:

1. 
      - **Value**: `catch (err) {
        if (!(0, _isdynamicusageerror.isDynamicUsageError)(err)) {
            throw err;
        }
        return {
            fromBuildExportRevalidate: 0
        };
    }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L93](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L93)

2. 
      - **Value**: `throw err;`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L95](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next/dist/export/routes/app-route.js#L95)

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*


---
# Route 16: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts)

**Implementation**: `async function handleMiddleware(req: NextRequest, options: NextAuthMiddlewareOptions | undefined, onSuccess?: (token: JWT | null) => Promise<NextMiddlewareResult>)`  
**HTTP Method**: `handleMiddleware`

**Variables**:

1. 
      - **Value**: `const { pathname, search, origin, basePath } = req.nextUrl`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L104](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L104)

2. 
      - **Value**: `const signInPage = options?.pages?.signIn ?? "/api/auth/signin"`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L106](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L106)

3. 
      - **Value**: `const errorPage = options?.pages?.error ?? "/api/auth/error"`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L107](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L107)

4. 
      - **Value**: `const authPath = parseUrl(process.env.NEXTAUTH_URL).path`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L108](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L108)

5. 
      - **Value**: `const publicPaths = ["/_next", "/favicon.ico"]`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L109](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L109)

6. 
      - **Value**: `const secret = options?.secret ?? process.env.NEXTAUTH_SECRET`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L121](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L121)

7. 
      - **Value**: `const errorUrl = new URL(`${basePath}${errorPage}`, origin)`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L128](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L128)

8. 
      - **Value**: `const token = await getToken({
    req,
    decode: options?.jwt?.decode,
    cookieName: options?.cookies?.sessionToken?.name,
    secret,
  })`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L134](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L134)

9. 
      - **Value**: `const isAuthorized =
    (await options?.callbacks?.authorized?.({ req, token })) ?? !!token`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L141](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L141)

10. 
      - **Value**: `const signInUrl = new URL(`${basePath}${signInPage}`, origin)`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L148](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L148)

11. 
      - **Value**: `const middleware = args[0]`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L228](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L228)

12. 
      - **Value**: `const options = args[1] as NextAuthMiddlewareOptions | undefined`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L229](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L229)

13. 
      - **Value**: `const options = args[0]`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L237](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L237)

**Conditionals**:

1. 
      - **Value**: `if (
    `${basePath}${pathname}`.startsWith(authPath) ||
    [signInPage, errorPage].includes(pathname) ||
    publicPaths.some((p) => pathname.startsWith(p))
  ) {
    return
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L113](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L113)

2. 
      - **Value**: `if (!secret) {
    console.error(
      `[next-auth][error][NO_SECRET]`,
      `\nhttps://next-auth.js.org/errors#no_secret`
    )

    const errorUrl = new URL(`${basePath}${errorPage}`, origin)
    errorUrl.searchParams.append("error", "Configuration")

    return NextResponse.redirect(errorUrl)
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L122](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L122)

3. 
      - **Value**: `if (isAuthorized) return await onSuccess?.(token)`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L145](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L145)

4. 
      - **Value**: `if (!args.length || args[0] instanceof Request) {
    // @ts-expect-error
    return handleMiddleware(...args)
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L222](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L222)

5. 
      - **Value**: `if (typeof args[0] === "function") {
    const middleware = args[0]
    const options = args[1] as NextAuthMiddlewareOptions | undefined
    return async (...args: Parameters<NextMiddlewareWithAuth>) =>
      await handleMiddleware(args[0], options, async (token) => {
        args[0].nextauth = { token }
        return await middleware(...args)
      })
  }`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L227](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L227)

**Comments**:

1. 
      - **Value**: `// eslint-disable-line @typescript-eslint/no-invalid-void-type`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L97](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L97)

2. 
      - **Value**: `// eslint-disable-line @typescript-eslint/no-invalid-void-type`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L97](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L97)

3. 
      - **Value**: `// Avoid infinite redirects/invalid response`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L111](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L111)

4. 
      - **Value**: `// on paths that never require authentication`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L112](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L112)

5. 
      - **Value**: `// the user is authorized, let the middleware handle the rest`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L144](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L144)

6. 
      - **Value**: `// the user is not logged in, redirect to the sign-in page`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L147](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L147)

7. 
      - **Value**: `/**
 * Middleware that checks if the user is authenticated/authorized.
 * If if they aren't, they will be redirected to the login page.
 * Otherwise, continue.
 *
 * @example
 *
 * ```js
 * // `middleware.js`
 * export { default } from "next-auth/middleware"
 * ```
 *
 * ---
 * [Documentation](https://next-auth.js.org/configuration/nextjs#middleware)
 */`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L174](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L174)

8. 
      - **Value**: `// @ts-expect-error`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L223](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L223)

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import type { NextMiddleware, NextFetchEvent } from "next/server";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L1](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L1)

2. 
      - **Value**: `import type { Awaitable, CookieOption, AuthOptions } from "..";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L2](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L2)

3. 
      - **Value**: `import type { JWT, JWTOptions } from "../jwt";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L3](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L3)

4. 
      - **Value**: `import { NextResponse, NextRequest } from "next/server";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L5](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L5)

5. 
      - **Value**: `import { getToken } from "../jwt";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L7](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L7)

6. 
      - **Value**: `import parseUrl from "../utils/parse-url";`
      - **Line**: [/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L8](/Users/olli/Documents/Projects/OLD/next-routes-readme/node_modules/next-auth/src/next/middleware.ts#L8)

