
---
# Route 1: [examples/app/basic-redirect-response/route.ts](examples/app/basic-redirect-response/route.ts)

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

**Dependencies**:

1. 
      - **Value**: `import { NextResponse } from 'next/server';`
      - **Line**: [examples/app/basic-redirect-response/route.ts#L1](examples/app/basic-redirect-response/route.ts#L1)

