# Table of Contents

- [Route 1](#route-1-examplesappdynamicroutesubmultipledynamicroutesroutets)
- [Route 2](#route-2-examplesappdynamicrouteroutets)
- [Route 3](#route-3-examplesappanother-routeroutets)
- [Route 4](#route-4-examplesappbasic-healtcheckroutets)
- [Route 5](#route-5-examplesappbasic-healthcheck-jsroutets)
- [Route 6](#route-6-examplesappbasic-healthcheck-responseroutets)
- [Route 7](#route-7-examplesappbasic-redirect-responseroutets)
- [Route 8](#route-8-examplesappbasic-rewrite-responseroutets)
- [Route 9](#route-9-examplesappbasic-routeroutets)
- [Route 10](#route-10-examplesappbasic-routesub-routeroutets)
- [Route 11](#route-11-examplesappopen-airoutets)
- [Route 12](#route-12-examplesapproutets)
---
# Route 1: [examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts](examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts)

**Implementation**: `async function DELETE(_: NextRequest, { params }: { params: { dynamicRouteA: string; dynamicRouteB: string } })`  
**HTTP Method**: `DELETE`

**Variables**:

1. 
      - **Value**: `const { dynamicRouteA, dynamicRouteB } = params;`
      - **Line**: [examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L7](examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L7)

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
      - **Line**: [examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1](examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1)


---
# Route 2: [examples/app/[dynamicRoute]/route.ts](examples/app/[dynamicRoute]/route.ts)

**Implementation**: `async function DELETE(request: NextRequest, { params }: { params: { dynamicRoute: string } })`  
**HTTP Method**: `DELETE`

**Variables**:

1. 
      - **Value**: `const searchParams = request.nextUrl.searchParams;`
      - **Line**: [examples/app/[dynamicRoute]/route.ts#L7](examples/app/[dynamicRoute]/route.ts#L7)

2. 
      - **Value**: `const query = searchParams.get('myQueryValue');`
      - **Line**: [examples/app/[dynamicRoute]/route.ts#L8](examples/app/[dynamicRoute]/route.ts#L8)

3. 
      - **Value**: `const dynamicRoute = params.dynamicRoute;`
      - **Line**: [examples/app/[dynamicRoute]/route.ts#L9](examples/app/[dynamicRoute]/route.ts#L9)

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
      - **Line**: [examples/app/[dynamicRoute]/route.ts#L1](examples/app/[dynamicRoute]/route.ts#L1)


---
# Route 3: [examples/app/another-route/route.ts](examples/app/another-route/route.ts)

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
      - **Line**: [examples/app/another-route/route.ts#L2](examples/app/another-route/route.ts#L2)

2. 
      - **Value**: `const data = await res.json();`
      - **Line**: [examples/app/another-route/route.ts#L8](examples/app/another-route/route.ts#L8)

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
# Route 4: [examples/app/basic-healtcheck/route.ts](examples/app/basic-healtcheck/route.ts)

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
      - **Line**: [examples/app/basic-healtcheck/route.ts#L1](examples/app/basic-healtcheck/route.ts#L1)


---
# Route 5: [examples/app/basic-healthcheck-js/route.ts](examples/app/basic-healthcheck-js/route.ts)

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
      - **Line**: [examples/app/basic-healthcheck-js/route.ts#L1](examples/app/basic-healthcheck-js/route.ts#L1)


---
# Route 6: [examples/app/basic-healthcheck-response/route.ts](examples/app/basic-healthcheck-response/route.ts)

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
      - **Line**: [examples/app/basic-healthcheck-response/route.ts#L2](examples/app/basic-healthcheck-response/route.ts#L2)

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
# Route 7: [examples/app/basic-redirect-response/route.ts](examples/app/basic-redirect-response/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

1. 
      - **Value**: `if (Math.random() > 0.5) {
    return NextResponse.redirect(new URL('https://www.google.com'), 307);
  }`
      - **Line**: [examples/app/basic-redirect-response/route.ts#L4](examples/app/basic-redirect-response/route.ts#L4)

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
      - **Line**: [examples/app/basic-redirect-response/route.ts#L5](examples/app/basic-redirect-response/route.ts#L5)

2. 
      - **Value**: `https://www.google.com/baidu`
      - **Status**: `307`
      - **Line**: [examples/app/basic-redirect-response/route.ts#L8](examples/app/basic-redirect-response/route.ts#L8)

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/app/basic-redirect-response/route.ts#L1](examples/app/basic-redirect-response/route.ts#L1)


---
# Route 8: [examples/app/basic-rewrite-response/route.ts](examples/app/basic-rewrite-response/route.ts)

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
      - **Line**: [examples/app/basic-rewrite-response/route.ts#L4](examples/app/basic-rewrite-response/route.ts#L4)

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/app/basic-rewrite-response/route.ts#L1](examples/app/basic-rewrite-response/route.ts#L1)


---
# Route 9: [examples/app/basic-route/route.ts](examples/app/basic-route/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const cookieStore = cookies();`
      - **Line**: [examples/app/basic-route/route.ts#L4](examples/app/basic-route/route.ts#L4)

2. 
      - **Value**: `const token = cookieStore.get('token');`
      - **Line**: [examples/app/basic-route/route.ts#L5](examples/app/basic-route/route.ts#L5)

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
      - **Line**: [examples/app/basic-route/route.ts#L1](examples/app/basic-route/route.ts#L1)


---
# Route 10: [examples/app/basic-route/sub-route/route.ts](examples/app/basic-route/sub-route/route.ts)

**Implementation**: `async function PUT(request: NextRequest)`  
**HTTP Method**: `PUT`

**Variables**:

1. 
      - **Value**: `const subRoute = request.nextUrl.pathname;`
      - **Line**: [examples/app/basic-route/sub-route/route.ts#L4](examples/app/basic-route/sub-route/route.ts#L4)

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
      - **Line**: [examples/app/basic-route/sub-route/route.ts#L1](examples/app/basic-route/sub-route/route.ts#L1)


---
# Route 11: [examples/app/open-ai/route.ts](examples/app/open-ai/route.ts)

**Implementation**: `async function POST(req: Request)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const { messages } = await req.json();`
      - **Line**: [examples/app/open-ai/route.ts#L14](examples/app/open-ai/route.ts#L14)

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
      - **Line**: [examples/app/open-ai/route.ts#L17](examples/app/open-ai/route.ts#L17)

3. 
      - **Value**: `const stream = OpenAIStream(response);`
      - **Line**: [examples/app/open-ai/route.ts#L29](examples/app/open-ai/route.ts#L29)

**Conditionals**:

*None*

**Comments**:

1. 
      - **Value**: `// Extract the `messages` from the body of the request`
      - **Line**: [examples/app/open-ai/route.ts#L13](examples/app/open-ai/route.ts#L13)

2. 
      - **Value**: `// Request the OpenAI API for the response based on the prompt`
      - **Line**: [examples/app/open-ai/route.ts#L16](examples/app/open-ai/route.ts#L16)

3. 
      - **Value**: `// Convert the response into a friendly text-stream`
      - **Line**: [examples/app/open-ai/route.ts#L28](examples/app/open-ai/route.ts#L28)

4. 
      - **Value**: `// Respond with the stream`
      - **Line**: [examples/app/open-ai/route.ts#L31](examples/app/open-ai/route.ts#L31)

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
      - **Line**: [examples/app/open-ai/route.ts#L1](examples/app/open-ai/route.ts#L1)

2. 
      - **Value**: `import { OpenAIStream, StreamingTextResponse } from 'ai';`
      - **Line**: [examples/app/open-ai/route.ts#L2](examples/app/open-ai/route.ts#L2)


---
# Route 12: [examples/app/route.ts](examples/app/route.ts)

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
      - **Line**: [examples/app/route.ts#L5](examples/app/route.ts#L5)

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
      - **Line**: [examples/app/route.ts#L15](examples/app/route.ts#L15)

**Comments**:

1. 
      - **Value**: `// eslint-disable-next-line @typescript-eslint/no-explicit-any`
      - **Line**: [examples/app/route.ts#L27](examples/app/route.ts#L27)

**Errors**:

1. 
      - **Value**: `NextResponse.json({ error: 'Invalid Request' }, { status: 500 })`
      - **Line**: [examples/app/route.ts#L24](examples/app/route.ts#L24)

2. 
      - **Value**: `catch (error) {
    console.error('Error logging to GCP:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }`
      - **Line**: [examples/app/route.ts#L31](examples/app/route.ts#L31)

3. 
      - **Value**: `NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })`
      - **Line**: [examples/app/route.ts#L33](examples/app/route.ts#L33)

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
      - **Line**: [examples/app/route.ts#L1](examples/app/route.ts#L1)

