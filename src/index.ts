#!/usr/bin/env node

import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { RouteHandler } from './types/route-handler';
import { traverseDirectory } from './utils/traverseDictory';
import fs from 'fs';

async function generateMarkdownOutput(handlers: RouteHandler[], file: string) {
  const markdownOutput = handlers
    .map(handler => {
      return `
---
# Route: ${file}  

**Implementation**: \`${handler.implementation}\`  
**HTTP Method**: ${handler.method}  

**Documentation**:
\`\`\`json
${JSON.stringify(handler.doc, null, 2)}
\`\`\`

**Dependencies**:
\`\`\`json
${JSON.stringify(handler.dependencies, null, 2)}
\`\`\`

`;
    })
    .join('');

  fs.appendFileSync('ROUTES.md', markdownOutput);
}

async function main() {
  fs.writeFileSync('ROUTES.md', ''); // Clear existing content or create new file

  const folderPath = process.argv[2];

  await traverseDirectory(folderPath, async file => {
    try {
      if (
        file.endsWith(`${constants.routeFilename}.ts`) ||
        file.endsWith(`${constants.routeFilename}.js`)
      ) {
        const handlers = parseRouteHandlers(file);

        for (const handler of handlers) {
          await generateMarkdownOutput([handler], file);
        }
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });
}

main();
