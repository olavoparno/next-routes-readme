# Next Routes Readme

Next Routes Readme is a cool utility that helps generate short and brief markdown documentation for Next App Routes (Next 13+). It automates the process of extracting information from your App Route files and creates well-structured markdown documentation.

## Features

- Automatically extracts information from API route files.
- Generates markdown documentation with details about each API route.
- Provides information on HTTP methods, route implementations, dependencies, and more.

## Installation

```bash
npm install next-routes-readme
```

## Usage

```bash
npx next-routes-readme <path-to-your-app-folder>
```

> https://nextjs.org/docs/app

Replace `<path-to-api-folder>` with the path to the folder containing your API routes.

## Example Output

Here is an example of the generated documentation for an API route:

```markdown
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

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
