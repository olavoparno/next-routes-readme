"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./config/constants");
const parser_1 = require("./route-parser/parser");
const traverseDictory_1 = require("./utils/traverseDictory");
const fs_1 = __importDefault(require("fs"));
async function generateMarkdownOutput(handlers, file) {
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
    fs_1.default.appendFileSync('ROUTES.md', markdownOutput);
}
async function main() {
    fs_1.default.writeFileSync('ROUTES.md', ''); // Clear existing content or create new file
    const folderPath = process.argv[2];
    await (0, traverseDictory_1.traverseDirectory)(folderPath, async (file) => {
        try {
            if (file.endsWith(`${constants_1.constants.routeFilename}.ts`) ||
                file.endsWith(`${constants_1.constants.routeFilename}.js`)) {
                const handlers = (0, parser_1.parseRouteHandlers)(file);
                for (const handler of handlers) {
                    await generateMarkdownOutput([handler], file);
                }
            }
        }
        catch (error) {
            console.error(`Error processing file ${file}:`, error);
        }
    });
}
main();
//# sourceMappingURL=index.js.map