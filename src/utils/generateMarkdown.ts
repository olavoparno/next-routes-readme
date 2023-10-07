import fs from 'fs';
import { RouteHandler } from '../types/route-handler';

export async function generateMarkdownOutput(handlers: RouteHandler[], file: string) {
  const markdownOutput = handlers
    .map(handler => {
      return `
---
# Route: [${file}](${file})

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
