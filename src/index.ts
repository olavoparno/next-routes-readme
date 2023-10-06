import fs from 'fs';
import path from 'path';

interface RouteHandler {
  name: string;
  method: string;
  implementation: string;
  doc: {
    variables: { value: string; line: number }[];
    conditionals: { value: string; line: number }[];
    errors: { value: string; line: number }[];
    comments: { value: string; line: number }[];
  };
  dependencies: string[];
}

function parseRouteHandlers(routeFile: string): RouteHandler[] {
  const content = fs.readFileSync(routeFile, 'utf-8');
  const handlers: RouteHandler[] = [];
  let currentHandler: RouteHandler | null = null;
  let dependencies: string[] = [];

  const lines = content.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();
    const currentLineNumber = lines.indexOf(line) + 1;

    if (trimmedLine.startsWith('import {')) {
      dependencies.push(trimmedLine);
    }

    const match = /export async function (\w+)\(([\w: ,]*)\)/.exec(trimmedLine);

    if (match) {
      currentHandler = {
        implementation: match[0],
        name: match[1],
        method: 'GET',
        doc: { variables: [], conditionals: [], errors: [], comments: [] },
        dependencies,
      };
    }

    if (currentHandler && trimmedLine.includes('=')) {
      currentHandler.doc.variables.push({ value: trimmedLine, line: currentLineNumber });
    }

    if (currentHandler && (trimmedLine.includes('if') || trimmedLine.includes('?'))) {
      currentHandler.doc.conditionals.push({ value: trimmedLine, line: currentLineNumber });
    }

    if (
      currentHandler &&
      (trimmedLine.includes('throw') ||
        trimmedLine.includes('new Error') ||
        trimmedLine.includes('Promise.reject'))
    ) {
      currentHandler.doc.errors.push({ value: trimmedLine, line: currentLineNumber });
    }

    if (currentHandler && trimmedLine.startsWith('//')) {
      currentHandler.doc.comments.push({ value: trimmedLine, line: currentLineNumber });
    }

    if (currentHandler && trimmedLine.startsWith('/*') && trimmedLine.endsWith('*/')) {
      currentHandler.doc.comments.push({ value: trimmedLine, line: currentLineNumber });
    }

    if (currentHandler && trimmedLine.startsWith('/*') && !trimmedLine.endsWith('*/')) {
      const commentInLines = { value: trimmedLine, line: currentLineNumber };

      for (let i = currentLineNumber; i < lines.length; i++) {
        const nextLine = lines[i].trim();

        commentInLines.value += '\n' + nextLine;

        if (nextLine.endsWith('*/')) {
          break;
        }
      }

      currentHandler.doc.comments.push(commentInLines);
    }
  }

  if (currentHandler) {
    currentHandler.dependencies = dependencies;
    handlers.push(currentHandler);
  }

  return handlers;
}

function traverseDirectory(
  directory: string,
  fileCallback: (file: string, parentFolderName: string) => void,
  parentFolderName = ''
) {
  try {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath, fileCallback, path.join(parentFolderName, file));
      } else {
        fileCallback(filePath, parentFolderName);
      }
    }
  } catch (error) {
    console.error(`Error while traversing directory ${directory}:`, error);
  }
}

const folderPath = process.argv[2];

traverseDirectory(folderPath, (file, parentFolderName) => {
  try {
    if (file.endsWith('route.ts')) {
      const handlers = parseRouteHandlers(file);
      for (const handler of handlers) {
        console.log(`Implementation: ${handler.implementation}`);
        console.log(`Route: app/${parentFolderName}/route.ts`);
        console.log(`HTTP Method: ${handler.method}`);
        console.log(`Documentation: ${JSON.stringify(handler.doc, null, 2)}`);
        console.log(`Dependencies: ${JSON.stringify(handler.dependencies, null, 2)}\n`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});
