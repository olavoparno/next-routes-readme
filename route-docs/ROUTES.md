# Table of Contents

- [Route 1](#examplessrcappapidynamicroutesubmultipledynamicroutesroutets)
- [Route 2](#examplessrcappapidynamicrouteroutets)
- [Route 3](#examplessrcappapianother-routeroutets)
- [Route 4](#examplessrcappapibasic-healtcheckroutets)
- [Route 5](#examplessrcappapibasic-healthcheck-jsroutets)
- [Route 6](#examplessrcappapibasic-healthcheck-responseroutets)
- [Route 7](#examplessrcappapibasic-redirect-responseroutets)
- [Route 8](#examplessrcappapibasic-rewrite-responseroutets)
- [Route 9](#examplessrcappapibasic-routeroutets)
- [Route 10](#examplessrcappapibasic-routesub-routeroutets)
- [Route 11](#examplessrcappapiidentified-userdetect-wiped-databaseroutets)
- [Route 12](#examplessrcappapiidentified-userperformed-user-action-typesroutets)
- [Route 13](#examplessrcappapiopen-airoutets)
- [Route 14](#examplessrcappapiroutets)

---

# [examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts](../examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts):

**Implementation**: `const POST = async (false)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const { dynamicRoute, subMultipleDynamicRoutes } = params;`
      - **Line**: [examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L14](../examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L14)

2. 
      - **Value**: `const [subDynamicRouteA, subDynamicRouteB] = subMultipleDynamicRoutes;`
      - **Line**: [examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L15](../examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L15)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:

1. **Parameter**: `[dynamicRoute]`
   - **Type**: Single value (e.g., `{ [dynamicRoute] }`)

2. **Parameter**: `[subMultipleDynamicRoutes]`
   - **Type**: Array of values (e.g., `[[subMultipleDynamicRoutes]1, [subMultipleDynamicRoutes]2, ...]`)

**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1](../examples/src/app/api/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1)

**cURL**:

```shell
"curl -X POST 'http://localhost:3000/[dynamicRoute]/[subMultipleDynamicRoutes] --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/[dynamicRoute]/route.ts](../examples/src/app/api/[dynamicRoute]/route.ts):

**Implementation**: `const DELETE = async (false)`  
**HTTP Method**: `DELETE`

**Variables**:

1. 
      - **Value**: `const searchParams = request.nextUrl.searchParams;`
      - **Line**: [examples/src/app/api/[dynamicRoute]/route.ts#L7](../examples/src/app/api/[dynamicRoute]/route.ts#L7)

2. 
      - **Value**: `const query = searchParams.get('myQueryValue');`
      - **Line**: [examples/src/app/api/[dynamicRoute]/route.ts#L8](../examples/src/app/api/[dynamicRoute]/route.ts#L8)

3. 
      - **Value**: `const dynamicRoute = params.dynamicRoute;`
      - **Line**: [examples/src/app/api/[dynamicRoute]/route.ts#L9](../examples/src/app/api/[dynamicRoute]/route.ts#L9)

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

1. **Parameter**: `[dynamicRoute]`
   - **Type**: Single value (e.g., `{ [dynamicRoute] }`)

**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/[dynamicRoute]/route.ts#L1](../examples/src/app/api/[dynamicRoute]/route.ts#L1)

**cURL**:

```shell
"curl -X DELETE 'http://localhost:3000/[dynamicRoute]?myQueryValue=myQueryValue --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/another-route/route.ts](../examples/src/app/api/another-route/route.ts):

**Implementation**: `const GET = async (false)`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY || '',
    },
  });`
      - **Line**: [examples/src/app/api/another-route/route.ts#L2](../examples/src/app/api/another-route/route.ts#L2)

2. 
      - **Value**: `const data = await res.json();`
      - **Line**: [examples/src/app/api/another-route/route.ts#L8](../examples/src/app/api/another-route/route.ts#L8)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-healtcheck/route.ts](../examples/src/app/api/basic-healtcheck/route.ts):

**Implementation**: `const GET = async (false)`  
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



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/basic-healtcheck/route.ts#L1](../examples/src/app/api/basic-healtcheck/route.ts#L1)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-healthcheck-js/route.ts](../examples/src/app/api/basic-healthcheck-js/route.ts):

**Implementation**: `const GET = async (false)`  
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



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/basic-healthcheck-js/route.ts#L1](../examples/src/app/api/basic-healthcheck-js/route.ts#L1)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-healthcheck-response/route.ts](../examples/src/app/api/basic-healthcheck-response/route.ts):

**Implementation**: `const GET = async (false)`  
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
      - **Line**: [examples/src/app/api/basic-healthcheck-response/route.ts#L2](../examples/src/app/api/basic-healthcheck-response/route.ts#L2)

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

*None*

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-redirect-response/route.ts](../examples/src/app/api/basic-redirect-response/route.ts):

**Implementation**: `const GET = async (false)`  
**HTTP Method**: `GET`

**Variables**:

*None*

**Conditionals**:

1. 
      - **Value**: `if (Math.random() > 0.5) {
    return NextResponse.redirect(new URL('https://www.google.com'), 307);
  }`
      - **Line**: [examples/src/app/api/basic-redirect-response/route.ts#L4](../examples/src/app/api/basic-redirect-response/route.ts#L4)

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

1. 
      - **Value**: `https://www.google.com`
      - **Status**: `307`
      - **Line**: [examples/src/app/api/basic-redirect-response/route.ts#L5](../examples/src/app/api/basic-redirect-response/route.ts#L5)

2. 
      - **Value**: `https://www.google.com/baidu`
      - **Status**: `307`
      - **Line**: [examples/src/app/api/basic-redirect-response/route.ts#L8](../examples/src/app/api/basic-redirect-response/route.ts#L8)

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/basic-redirect-response/route.ts#L1](../examples/src/app/api/basic-redirect-response/route.ts#L1)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-rewrite-response/route.ts](../examples/src/app/api/basic-rewrite-response/route.ts):

**Implementation**: `const GET = async (false)`  
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



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

1. 
      - **Value**: `https://www.google.com/rewritten`
      - **Status**: `200`
      - **Line**: [examples/src/app/api/basic-rewrite-response/route.ts#L4](../examples/src/app/api/basic-rewrite-response/route.ts#L4)

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/basic-rewrite-response/route.ts#L1](../examples/src/app/api/basic-rewrite-response/route.ts#L1)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-route/route.ts](../examples/src/app/api/basic-route/route.ts):

**Implementation**: `const GET = async (false)`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const cookieStore = await cookies();`
      - **Line**: [examples/src/app/api/basic-route/route.ts#L4](../examples/src/app/api/basic-route/route.ts#L4)

2. 
      - **Value**: `const token = cookieStore.get('token');`
      - **Line**: [examples/src/app/api/basic-route/route.ts#L5](../examples/src/app/api/basic-route/route.ts#L5)

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



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { cookies } from 'next/headers';`
      - **Line**: [examples/src/app/api/basic-route/route.ts#L1](../examples/src/app/api/basic-route/route.ts#L1)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/?token=token --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/basic-route/sub-route/route.ts](../examples/src/app/api/basic-route/sub-route/route.ts):

**Implementation**: `const PUT = async (false)`  
**HTTP Method**: `PUT`

**Variables**:

1. 
      - **Value**: `const subRoute = request.nextUrl.pathname;`
      - **Line**: [examples/src/app/api/basic-route/sub-route/route.ts#L4](../examples/src/app/api/basic-route/sub-route/route.ts#L4)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/basic-route/sub-route/route.ts#L1](../examples/src/app/api/basic-route/sub-route/route.ts#L1)

**cURL**:

```shell
"curl -X PUT 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/identified-user/detect-wiped-database/route.ts](../examples/src/app/api/identified-user/detect-wiped-database/route.ts):

**Implementation**: `const POST = async (false)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const POST = withRouteMiddleware(async () => {
  const response = await apiResponse();
  return NextResponse.json(response);
});`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L33](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L33)

2. 
      - **Value**: `const response = await apiResponse();`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L34](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L34)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import 'server-only';`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L1](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L1)

2. 
      - **Value**: `import * as Sentry from '@sentry/nextjs';`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L3](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L3)

3. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L4](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L4)

4. 
      - **Value**: `import { withRouteMiddleware } from '../../../../utils/server/serverWrappers/withRouteMiddleware';`
      - **Line**: [examples/src/app/api/identified-user/detect-wiped-database/route.ts#L5](../examples/src/app/api/identified-user/detect-wiped-database/route.ts#L5)

**cURL**:

```shell
"curl -X POST 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/identified-user/performed-user-action-types/route.ts](../examples/src/app/api/identified-user/performed-user-action-types/route.ts):

**Implementation**: `const GET = async (false)`  
**HTTP Method**: `GET`

**Variables**:

1. 
      - **Value**: `const GET = withRouteMiddleware(async () => {
  const response = await apiResponseForUserPerformedUserActionTypes();
  return NextResponse.json(response);
});`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L24](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L24)

2. 
      - **Value**: `const response = await apiResponseForUserPerformedUserActionTypes();`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L25](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L25)

**Conditionals**:

*None*

**Comments**:

*None*

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

*None*

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import 'server-only';`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L1](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L1)

2. 
      - **Value**: `import { uniqBy } from 'lodash-es';`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L3](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L3)

3. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L4](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L4)

4. 
      - **Value**: `import { getMaybeUserAndMethodOfMatchWithMaybeSession } from '../../../../utils/server/getMaybeUserAndMethodOfMatch';`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L5](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L5)

5. 
      - **Value**: `import { withRouteMiddleware } from '../../../../utils/server/serverWrappers/withRouteMiddleware';`
      - **Line**: [examples/src/app/api/identified-user/performed-user-action-types/route.ts#L6](../examples/src/app/api/identified-user/performed-user-action-types/route.ts#L6)

**cURL**:

```shell
"curl -X GET 'http://localhost:3000/ --header 'Content-Type: application/json'"
```

---

# [examples/src/app/api/open-ai/route.ts](../examples/src/app/api/open-ai/route.ts):

**Implementation**: `const POST = async (false)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const { messages } = await req.json();`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L14](../examples/src/app/api/open-ai/route.ts#L14)

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
      - **Line**: [examples/src/app/api/open-ai/route.ts#L17](../examples/src/app/api/open-ai/route.ts#L17)

3. 
      - **Value**: `const stream = OpenAIStream(response);`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L29](../examples/src/app/api/open-ai/route.ts#L29)

**Conditionals**:

*None*

**Comments**:

1. 
      - **Value**: `// Extract the `messages` from the body of the request`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L13](../examples/src/app/api/open-ai/route.ts#L13)

2. 
      - **Value**: `// Request the OpenAI API for the response based on the prompt`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L16](../examples/src/app/api/open-ai/route.ts#L16)

3. 
      - **Value**: `// Convert the response into a friendly text-stream`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L28](../examples/src/app/api/open-ai/route.ts#L28)

4. 
      - **Value**: `// Respond with the stream`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L31](../examples/src/app/api/open-ai/route.ts#L31)

**Errors**:

*None*

**Query Params**:

*None*

**Route Params**:



**Request Body**:

{
  "messages": "<value>",
}

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { Configuration, OpenAIApi } from 'openai-edge';`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L1](../examples/src/app/api/open-ai/route.ts#L1)

2. 
      - **Value**: `import { OpenAIStream, StreamingTextResponse } from 'ai';`
      - **Line**: [examples/src/app/api/open-ai/route.ts#L2](../examples/src/app/api/open-ai/route.ts#L2)

**cURL**:

```shell
"curl -X POST 'http://localhost:3000/ --header 'Content-Type: application/json' --data '{ \"messages\": \"<value>\" }'"
```

---

# [examples/src/app/api/route.ts](../examples/src/app/api/route.ts):

**Implementation**: `const POST = async (false)`  
**HTTP Method**: `POST`

**Variables**:

1. 
      - **Value**: `const POST = async (request: NextRequest) => {
  await anotherFunction();

  try {
    const {
      severity,
      message,
      functionName,
      gcpProject,
      serviceAccountEmail,
      serviceAccountKey,
      env,
    } = await request.json();

    if (
      !severity ||
      !message ||
      !functionName ||
      !gcpProject ||
      !serviceAccountEmail ||
      !serviceAccountKey ||
      !env
    ) {
      return NextResponse.json({ error: 'Invalid Request' }, { status: 500 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (console as any)[severity](message);

    return NextResponse.json({ message: 'Log sent to Google Cloud Logging!' }, { status: 200 });
  } catch (error) {
    console.error('Error logging to GCP:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};`
      - **Line**: [examples/src/app/api/route.ts#L11](../examples/src/app/api/route.ts#L11)

2. 
      - **Value**: `const {
      severity,
      message,
      functionName,
      gcpProject,
      serviceAccountEmail,
      serviceAccountKey,
      env,
    } = await request.json();`
      - **Line**: [examples/src/app/api/route.ts#L15](../examples/src/app/api/route.ts#L15)

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
      - **Line**: [examples/src/app/api/route.ts#L25](../examples/src/app/api/route.ts#L25)

**Comments**:

1. 
      - **Value**: `// eslint-disable-next-line @typescript-eslint/no-explicit-any`
      - **Line**: [examples/src/app/api/route.ts#L37](../examples/src/app/api/route.ts#L37)

**Errors**:

1. 
      - **Value**: `NextResponse.json({ error: 'Invalid Request' }, { status: 500 })`
      - **Line**: [examples/src/app/api/route.ts#L34](../examples/src/app/api/route.ts#L34)

2. 
      - **Value**: `catch (error) {
    console.error('Error logging to GCP:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }`
      - **Line**: [examples/src/app/api/route.ts#L41](../examples/src/app/api/route.ts#L41)

3. 
      - **Value**: `NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })`
      - **Line**: [examples/src/app/api/route.ts#L43](../examples/src/app/api/route.ts#L43)

**Query Params**:

*None*

**Route Params**:



**Request Body**:

{
  "severity": "<value>",
  "message": "<value>",
  "functionName": "<value>",
  "gcpProject": "<value>",
  "serviceAccountEmail": "<value>",
  "serviceAccountKey": "<value>",
  "env": "<value>",
}

**Redirects**:

*None*

**Rewrites**:

*None*

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/src/app/api/route.ts#L1](../examples/src/app/api/route.ts#L1)

**cURL**:

```shell
"curl -X POST 'http://localhost:3000/ --header 'Content-Type: application/json' --data '{ \"severity\": \"<value>\",\"message\": \"<value>\",\"functionName\": \"<value>\",\"gcpProject\": \"<value>\",\"serviceAccountEmail\": \"<value>\",\"serviceAccountKey\": \"<value>\",\"env\": \"<value>\" }'"
```
