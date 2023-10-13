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
npx next-routes-readme --dir=<path-to-your-app-folder>
```

> https://nextjs.org/docs/app

Replace `<path-to-api-folder>` with the path to the folder containing your API routes.

## Example Output. See file with more examples: [ROUTES.md](ROUTES.md)

Here is an example of the generated documentation for an API route:

```markdown
---
# Route 1: [examples/app/route.ts](examples/app/route.ts)

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

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/app/route.ts#L1](examples/app/route.ts#L1)

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
