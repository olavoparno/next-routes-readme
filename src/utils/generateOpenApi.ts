import fs from 'fs';
import { RouteHandler } from '../types/route-handler';

export function generateOpenAPISpec(
  routeHandlers: RouteHandler[],
  currentFilePath: string,
  projectRoot: string
) {
  // OpenAPI Spec Header (written once)
  let openApiString = `
{
  "openapi": "3.0.0",
  "info": {
    "title": "Generated API",
    "version": "1.0.0"
  },
  "paths": {`;

  routeHandlers.forEach(currentHandler => {
    // Skip middleware routes
    if (currentHandler.isMiddleware) return;

    // file example: examples/app/[dynamicRoute]/[...subMultipleDynamicRoutes]/route.ts
    // API routes path follows this example /api/{routePath}
    const normalizedProjectRoot = projectRoot.replace(/[^a-zA-Z]/g, '');
    const normalizedFileName = currentHandler.file
      .replace(normalizedProjectRoot, '')
      .replace(/.ts|.js/, '')
      .replace('/route', '');
    const normalizedFileNameWOApp = normalizedFileName.startsWith('/app/')
      ? normalizedFileName.replace('/app/', '/')
      : normalizedFileName;
    const routePath = `/api${normalizedFileNameWOApp}`;

    openApiString += `
    "${routePath}": {
      "${currentHandler.method.toLowerCase()}": {
        "summary": "${currentHandler.method} handler to ${routePath}",
        "parameters": [
          ${currentHandler.doc.queryParams
            .map(
              param => `{
            "name": "${param}",
            "in": "query",
            "required": false,
            "schema": { "type": "string" },
            "description": "Query parameter ${param}"
          }`
            )
            .join(',\n')}
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Successful response"
                    }
                  }
                }
              }
            }
          }
        }${
          ['post', 'put'].includes(currentHandler.method.toLowerCase())
            ? `,
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": ${currentHandler.cURL}
              }
            }
          },
          "required": true
        }`
            : ''
        }
      }
    },`;
  });

  // Remove the last comma from the paths object (for proper JSON formatting)
  openApiString =
    openApiString.trim().replace(/,$/, '') +
    `
  }
}`;

  // Write the accumulated OpenAPI spec to the file
  fs.writeFileSync(currentFilePath, openApiString);
}
