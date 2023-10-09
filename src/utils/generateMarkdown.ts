import fs from 'fs';
import { RouteHandler } from '../types/route-handler';

export async function generateMarkdownOutput(
  currentHandler: RouteHandler,
  file: string,
  index: number
) {
  const markdownOutput = `
---
# Route ${index}: [${file}](${file})

**Implementation**: \`${currentHandler.implementation}\`  
**HTTP Method**: ${currentHandler.method}  

**Documentation**:
\`\`\`json
${JSON.stringify(currentHandler.doc, null, 2)}
\`\`\`

**Dependencies**:
\`\`\`json
${JSON.stringify(currentHandler.dependencies, null, 2)}
\`\`\`

`;

  fs.appendFileSync('ROUTES.md', markdownOutput);
}
