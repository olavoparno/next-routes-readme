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

## Example Output [ROUTES.md](ROUTES.md)

Here is an example of the generated documentation for an API route:

```markdown
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

**Dependencies**:

1. 
      - **Value**: `import { NextRequest, NextResponse } from 'next/server';`
      - **Line**: [examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1](examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts#L1)
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
