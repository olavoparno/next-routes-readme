
---
# Route: [examples/app/another-route/route.ts](examples/app/another-route/route.ts)

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
  "comments": []
}
```

**Dependencies**:
```json
[]
```


---
# Route: [examples/app/basic-healtcheck/route.ts](examples/app/basic-healtcheck/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [],
  "conditionals": [],
  "errors": [],
  "comments": []
}
```

**Dependencies**:
```json
[
  "import { NextResponse } from 'next/server';"
]
```


---
# Route: [examples/app/basic-healthcheck-js/route.ts](examples/app/basic-healthcheck-js/route.ts)

**Implementation**: `async function GET()`  
**HTTP Method**: GET  

**Documentation**:
```json
{
  "variables": [],
  "conditionals": [],
  "errors": [],
  "comments": []
}
```

**Dependencies**:
```json
[
  "import { NextResponse } from 'next/server';"
]
```


---
# Route: [examples/app/open-ai/route.ts](examples/app/open-ai/route.ts)

**Implementation**: `async function POST(req: Request)`  
**HTTP Method**: GET  

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
  ]
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
# Route: [examples/app/other-route/route.ts](examples/app/other-route/route.ts)

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
  "comments": []
}
```

**Dependencies**:
```json
[
  "import { cookies } from 'next/headers';"
]
```


---
# Route: [examples/app/route.ts](examples/app/route.ts)

**Implementation**: `async function POST(request: NextRequest)`  
**HTTP Method**: GET  

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
  ]
}
```

**Dependencies**:
```json
[
  "import { NextRequest, NextResponse } from 'next/server';"
]
```

