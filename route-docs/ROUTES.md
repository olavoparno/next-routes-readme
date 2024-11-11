# Table of Contents

- [Route 1](#examplessrcappapibasic-routeroutets)
- [Route 2](#examplessrcappapiidentified-userdetect-wiped-databaseroutets)
- [Route 3](#examplessrcappapiidentified-userperformed-user-action-typesroutets)

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
"curl -X GET 'http://localhost:3000/'?token=token --header 'Content-Type: application/json'"
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
"curl -X POST 'http://localhost:3000/' --header 'Content-Type: application/json'"
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
"curl -X GET 'http://localhost:3000/' --header 'Content-Type: application/json'"
```
