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
  const isHttpStatusValid = (status: number) => status >= 200 && status < 300;
  let currentHandler: RouteHandler | null = null;

  const ast = parser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    enter(path) {
      if (t.isImportDeclaration(path.node)) {
        dependencies.push(path.toString());
      }

      if (t.isFunctionDeclaration(path.node) && path.node.async) {
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
      }

      if (currentHandler) {
        const currentLineNumber = path.node.loc?.start.line || 0;

        if (t.isVariableDeclaration(path.node)) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.variables.push({ value, line: currentLineNumber });
        }

        if (t.isIfStatement(path.node) || t.isConditionalExpression(path.node)) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.conditionals.push({ value, line: currentLineNumber });
        }

        if (t.isThrowStatement(path.node)) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.errors.push({ value, line: currentLineNumber });
        }

        if (
          t.isTryStatement(path.parent) &&
          t.isCatchClause(path.parent.handler) &&
          path.parent.handler === path.node
        ) {
          const value = content.substring(path.node.start!, path.node.end!);
          const currentLineNumber = path.node.loc?.start.line || 0;
          currentHandler.doc.errors.push({ value, line: currentLineNumber });
        }

        if (
          t.isCallExpression(path.node) &&
          t.isMemberExpression(path.node.callee) &&
          t.isIdentifier(path.node.callee.object) &&
          path.node.callee.object.name === 'Promise' &&
          t.isIdentifier(path.node.callee.property) &&
          path.node.callee.property.name === 'reject'
        ) {
          const value = content.substring(path.node.start!, path.node.end!);
          currentHandler.doc.errors.push({ value, line: currentLineNumber });
        }

        if (path.node.leadingComments) {
          path.node.leadingComments.forEach(comment => {
            const value = content.substring(comment.start!, comment.end!);
            currentHandler!.doc.comments.push({ value, line: comment.loc!.start.line });
          });
        }

        if (t.isCallExpression(path.node)) {
          // Check if it's a NextResponse.json call
          if (
            t.isMemberExpression(path.node.callee) &&
            t.isIdentifier(path.node.callee.object) &&
            path.node.callee.object.name === 'NextResponse' &&
            t.isIdentifier(path.node.callee.property) &&
            path.node.callee.property.name === 'json'
          ) {
            // Check if it has an error status argument
            if (path.node.arguments.length >= 2) {
              const statusArg = path.node.arguments[1];
              if (t.isObjectExpression(statusArg)) {
                // Check if it has a 'status' property
                for (const prop of statusArg.properties) {
                  if (
                    t.isObjectProperty(prop) &&
                    t.isIdentifier(prop.key) &&
                    prop.key.name === 'status' &&
                    t.isNumericLiteral(prop.value) &&
                    !isHttpStatusValid(prop.value.value)
                  ) {
                    const value = content.substring(path.node.start!, path.node.end!);
                    currentHandler.doc.errors.push({ value, line: currentLineNumber });
                    break;
                  }
                }
              }
            }
          }
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
        console.log(`Documentation: ${JSON.stringify(handler.doc.errors, null, 2)}`);
        // console.log(`Dependencies: ${JSON.stringify(handler.dependencies, null, 2)}\n`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});
