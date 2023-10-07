#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';
import path from 'path';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

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
  const dependencies: string[] = [];
  let currentHandler: RouteHandler | null = null;

  const ast = parser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    enter(path) {
      if (t.isImportDeclaration(path.node)) {
        dependencies.push(path.toString());
      } else if (t.isFunctionDeclaration(path.node) && path.node.async) {
        const { name } = path.node.id as t.Identifier;
        const params = path.node.params
          .map(param => content.substring(param.start!, param.end!))
          .join(', ');
        const returnType = path.node.returnType
          ? content.substring(path.node.returnType.start!, path.node.returnType.end!)
          : '';
        currentHandler = {
          implementation: `async function ${name}(${params})${returnType}`,
          name,
          method: 'GET',
          doc: {
            variables: [],
            conditionals: [],
            errors: [],
            comments: [],
          },
          dependencies,
        };
        if (path.node.leadingComments) {
          path.node.leadingComments.forEach(comment => {
            const value = content.substring(comment.start!, comment.end!);
            currentHandler!.doc.comments.push({ value, line: comment.loc!.start.line });
          });
        }
      } else if (currentHandler) {
        const currentLineNumber = path.node.loc?.start.line || 0;
        if (t.isVariableDeclaration(path.node)) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.variables.push({ value, line: currentLineNumber });
        } else if (t.isIfStatement(path.node) || t.isConditionalExpression(path.node)) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.conditionals.push({ value, line: currentLineNumber });
        } else if (
          t.isThrowStatement(path.node) ||
          t.isNewExpression(path.node) ||
          t.isCallExpression(path.node)
        ) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.errors.push({ value, line: currentLineNumber });
        } else if (path.node.leadingComments) {
          path.node.leadingComments.forEach(comment => {
            const value = content.substring(comment.start!, comment.end!);
            currentHandler!.doc.comments.push({ value, line: comment.loc!.start.line });
          });
        }
      }
    },
  });

  if (currentHandler) {
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
