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
    .map((variable, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${variable.value}\`
      - **Line**: [${file}#L${variable.line}](${file}#L${variable.line})`;
    })
    .join('\n\n') || '*None*'
}

**Conditionals**:

${
  currentHandler.doc.conditionals
    .map((conditional, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${conditional.value}\`
      - **Line**: [${file}#L${conditional.line}](${file}#L${conditional.line})`;
    })
    .join('\n\n') || '*None*'
}

**Comments**:

${
  currentHandler.doc.comments
    .map((comment, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${comment.value}\`
      - **Line**: [${file}#L${comment.line}](${file}#L${comment.line})`;
    })
    .join('\n\n') || '*None*'
}

**Errors**:

${
  currentHandler.doc.errors
    .map((error, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${error.value}\`
      - **Line**: [${file}#L${error.line}](${file}#L${error.line})`;
    })
    .join('\n\n') || '*None*'
}

**Query Params**:

${
  currentHandler.doc.queryParams
    .map((query, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${query}\``;
    })
    .join('\n\n') || '*None*'
}

**Route Params**:

${
  currentHandler.doc.routeParams
    .map((route, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${route}\``;
    })
    .join('\n\n') || '*None*'
}

**Redirects**:

${
  currentHandler.redirects
    .map((redirect, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${redirect.value}\`
      - **Status**: \`${redirect.status}\`
      - **Line**: [${file}#L${redirect.line}](${file}#L${redirect.line})`;
    })
    .join('\n\n') || '*None*'
}

**Dependencies**:

${
  currentHandler.dependencies
    .map((dependency, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${dependency.value}\`
      - **Line**: [${file}#L${dependency.line}](${file}#L${dependency.line})`;
    })
    .join('\n\n') || '*None*'
}

`;

  fs.appendFileSync('ROUTES.md', markdownOutput);
}
