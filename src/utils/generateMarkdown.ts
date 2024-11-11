import fs from 'fs';
import { constants } from '../config/constants';
import { RouteHandler } from '../types/route-handler';

export function generateMarkdownOutput(
  currentHandler: RouteHandler,
  file: string,
  currentFilePath: string
) {
  const isMiddleware =
    file.endsWith(`${constants.middlewareFilename}.ts`) ||
    file.endsWith(`${constants.middlewareFilename}.js`);

  const fileRelativePath = `../${file}`;

  const markdownOutput = `
---

# [${file}](${fileRelativePath}):

**Implementation**: \`${currentHandler.implementation}\`  
**HTTP Method**: \`${currentHandler.method}\`

**Variables**:

${
  currentHandler.doc.variables
    .map((variable, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${variable.value}\`
      - **Line**: [${file}#L${variable.line}](${fileRelativePath}#L${variable.line})`;
    })
    .join('\n\n') || '*None*'
}

**Conditionals**:

${
  currentHandler.doc.conditionals
    .map((conditional, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${conditional.value}\`
      - **Line**: [${file}#L${conditional.line}](${fileRelativePath}#L${conditional.line})`;
    })
    .join('\n\n') || '*None*'
}

**Comments**:

${
  currentHandler.doc.comments
    .map((comment, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${comment.value}\`
      - **Line**: [${file}#L${comment.line}](${fileRelativePath}#L${comment.line})`;
    })
    .join('\n\n') || '*None*'
}

**Errors**:

${
  currentHandler.doc.errors
    .map((error, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${error.value}\`
      - **Line**: [${file}#L${error.line}](${fileRelativePath}#L${error.line})`;
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
    ? Object.entries(currentHandler.doc.routeParams)
        .map(([paramName, paramValue], idx) => {
          const displayValue = Array.isArray(paramValue)
            ? `Array of values (e.g., \`[${paramName}1, ${paramName}2, ...]\`)`
            : `Single value (e.g., \`{ ${paramName} }\`)`;

          return `${idx + 1}. **Parameter**: \`${paramName}\`\n   - **Type**: ${displayValue}`;
        })
        .join('\n\n')
    : '*None*'
}

**Request Body**:

${
  currentHandler.doc.requestBody
    ? `{
  ${Object.keys(currentHandler.doc.requestBody)
    .map(
      currentKey =>
        `"${currentKey}": ${JSON.stringify(currentHandler?.doc.requestBody?.[currentKey], null, 2)},`
    )
    .join('\n  ')}
}`
    : '*None*'
}

**Redirects**:

${
  currentHandler.redirects
    .map((redirect, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${redirect.value}\`
      - **Status**: \`${redirect.status}\`
      - **Line**: [${file}#L${redirect.line}](${fileRelativePath}#L${redirect.line})`;
    })
    .join('\n\n') || '*None*'
}

**Rewrites**:

${
  currentHandler.rewrites
    .map((rewrite, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${rewrite.value}\`
      - **Status**: \`${rewrite.status}\`
      - **Line**: [${file}#L${rewrite.line}](${fileRelativePath}#L${rewrite.line})`;
    })
    .join('\n\n') || '*None*'
}

**Dependencies**:

${
  currentHandler.dependencies
    .map((dependency, idx) => {
      return `${idx + 1}. 
      - **Value**: \`${dependency.value}\`
      - **Line**: [${file}#L${dependency.line}](${fileRelativePath}#L${dependency.line})`;
    })
    .join('\n\n') || '*None*'
}

${
  isMiddleware
    ? ''
    : `**cURL**:

\`\`\`shell
${currentHandler.cURL}
\`\`\``
}
`;

  return fs.appendFileSync(currentFilePath, markdownOutput);
}
