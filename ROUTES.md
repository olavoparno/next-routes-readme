
---
# Route 1: [examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts](examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts)

**Implementation**: `async function DELETE(_: NextRequest, { params }: { params: { dynamicRouteA: string; dynamicRouteB: string } })`  
**HTTP Method**: DELETE  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const { dynamicRouteA, dynamicRouteB } = params;",
      "line": 7
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [],
  "routeParams": [
    "...subMultipleDynamicRoutes"
  ]
}
```

**Dependencies**:
```json
[
  "import { NextRequest, NextResponse } from 'next/server';"
]
```


---
# Route 2: [examples/app/[dynamicRoute]/route.ts](examples/app/[dynamicRoute]/route.ts)

**Implementation**: `async function DELETE(request: NextRequest, { params }: { params: { dynamicRoute: string } })`  
**HTTP Method**: DELETE  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const searchParams = request.nextUrl.searchParams;",
      "line": 7
    },
    {
      "value": "const query = searchParams.get('myQueryValue');",
      "line": 8
    },
    {
      "value": "const dynamicRoute = params.dynamicRoute;",
      "line": 9
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [
    "myQueryValue"
  ],
  "routeParams": [
    "dynamicRoute"
  ]
}
```

**Dependencies**:
```json
[
  "import { NextRequest, NextResponse } from 'next/server';"
]
```


---
# Route 3: [examples/app/another-route/route.ts](examples/app/another-route/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const res = await fetch('https://data.mongodb-api.com/...', {\n    headers: {\n      'Content-Type': 'application/json',\n      'API-Key': process.env.DATA_API_KEY || '',\n    },\n  });",
      "line": 2
    },
    {
      "value": "const data = await res.json();",
      "line": 8
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[]
```


---
# Route 4: [examples/app/basic-healtcheck/route.ts](examples/app/basic-healtcheck/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { NextResponse } from 'next/server';"
]
```


---
# Route 5: [examples/app/basic-healthcheck-js/route.ts](examples/app/basic-healthcheck-js/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { NextResponse } from 'next/server';"
]
```


---
# Route 6: [examples/app/basic-route/route.ts](examples/app/basic-route/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const cookieStore = cookies();",
      "line": 4
    },
    {
      "value": "const token = cookieStore.get('token');",
      "line": 5
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [
    "token"
  ],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { cookies } from 'next/headers';"
]
```


---
# Route 7: [examples/app/basic-route/sub-route/route.ts](examples/app/basic-route/sub-route/route.ts)

**Implementation**: `async function PUT(request: NextRequest)`  
**HTTP Method**: PUT  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const subRoute = request.nextUrl.pathname;",
      "line": 4
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { NextRequest, NextResponse } from 'next/server';"
]
```


---
# Route 8: [examples/app/open-ai/route.ts](examples/app/open-ai/route.ts)

**Implementation**: `async function POST(req: Request)`  
**HTTP Method**: POST  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const { messages } = await req.json();",
      "line": 14
    },
    {
      "value": "const response = await openai.createChatCompletion({\n    model: 'gpt-3.5-turbo',\n    stream: true,\n    messages: messages,\n    max_tokens: 500,\n    temperature: 0.7,\n    top_p: 1,\n    frequency_penalty: 1,\n    presence_penalty: 1,\n  });",
      "line": 17
    },
    {
      "value": "const stream = OpenAIStream(response);",
      "line": 29
    }
  ],
  "conditionals": [],
  "errors": [],
  "comments": [
    {
      "value": "// Extract the `messages` from the body of the request",
      "line": 13
    },
    {
      "value": "// Request the OpenAI API for the response based on the prompt",
      "line": 16
    },
    {
      "value": "// Convert the response into a friendly text-stream",
      "line": 28
    },
    {
      "value": "// Respond with the stream",
      "line": 31
    }
  ],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { Configuration, OpenAIApi } from 'openai-edge';",
  "import { OpenAIStream, StreamingTextResponse } from 'ai';"
]
```


---
# Route 9: [examples/app/route.ts](examples/app/route.ts)

**Implementation**: `async function POST(request: NextRequest)`  
**HTTP Method**: POST  

**Documentation**:
```json
{
  "variables": [
    {
      "value": "const {\n      severity,\n      message,\n      functionName,\n      gcpProject,\n      serviceAccountEmail,\n      serviceAccountKey,\n      env,\n    } = await request.json();",
      "line": 5
    }
  ],
  "conditionals": [
    {
      "value": "if (\n      !severity ||\n      !message ||\n      !functionName ||\n      !gcpProject ||\n      !serviceAccountEmail ||\n      !serviceAccountKey ||\n      !env\n    ) {\n      return NextResponse.json({ error: 'Invalid Request' }, { status: 500 });\n    }",
      "line": 15
    }
  ],
  "errors": [
    {
      "value": "NextResponse.json({ error: 'Invalid Request' }, { status: 500 })",
      "line": 24
    },
    {
      "value": "catch (error) {\n    console.error('Error logging to GCP:', error);\n    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });\n  }",
      "line": 31
    },
    {
      "value": "NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })",
      "line": 33
    }
  ],
  "comments": [
    {
      "value": "// eslint-disable-next-line @typescript-eslint/no-explicit-any",
      "line": 27
    }
  ],
  "queryParams": [],
  "routeParams": []
}
```

**Dependencies**:
```json
[
  "import { NextRequest, NextResponse } from 'next/server';"
]
```

