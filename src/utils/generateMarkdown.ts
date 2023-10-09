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
**HTTP Method**: \`${currentHandler.method}\`

**Variables**:
${
  currentHandler.doc.variables
    .map(variable => {
      return `> **Value**: \`${variable.value}\`
            > **Line**: [${file}#L${variable.line}](${file}#L${variable.line})`;
    })
    .join('\n\n') || '*None*'
}

**Conditionals**:
${
  currentHandler.doc.conditionals
    .map(conditional => {
      return `> **Value**:${conditional.value}
            > **Line**: [${file}#L${conditional.line}](${file}#L${conditional.line})`;
    })
    .join('\n\n') || '*None*'
}

**Comments**:
${
  currentHandler.doc.comments
    .map(comment => {
      return `> **Value**:${comment.value}
            > **Line**: [${file}#L${comment.line}](${file}#L${comment.line})`;
    })
    .join('\n\n') || '*None*'
}

**Errors**:
${
  currentHandler.doc.errors
    .map(error => {
      return `> **Value**:${error.value}
            > **Line**: [${file}#L${error.line}](${file}#L${error.line})`;
    })
    .join('\n\n') || '*None*'
}

**Query Params**:
${
  currentHandler.doc.queryParams
    .map(query => {
      return `> **Value**:${query}`;
    })
    .join('\n\n') || '*None*'
}

**Route Params**:
${
  currentHandler.doc.routeParams
    .map(route => {
      return `> **Value**:${route}`;
    })
    .join('\n\n') || '*None*'
}

**Dependencies**:

${
  currentHandler.dependencies
    .map(dependency => {
      return `\`${dependency}\``;
    })
    .join('\n') || '*None*'
}

`;

  fs.appendFileSync('ROUTES.md', markdownOutput);
}
