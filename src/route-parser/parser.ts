import fs from 'fs';
import traverse from '@babel/traverse';
import * as parser from '@babel/parser';
import * as t from '@babel/types';
import { Item, RouteHandler } from '../types/route-handler';
import { isHttpStatusValid } from '../utils/isHttpStatusValid';

export function parseRouteHandlers(routeFile: string): RouteHandler | null {
  const content = fs.readFileSync(routeFile, 'utf-8');
  const dependencies: Item[] = [];

  let currentHandler: RouteHandler | null = null;

  const ast = parser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    enter(path) {
      if (t.isImportDeclaration(path.node)) {
        dependencies.push({
          value: path.toString(),
          line: path.node.loc!.start.line,
        });
      }

      // Extract dynamic route parameter from the file name
      const fileNameParts = routeFile.split('/').filter(Boolean);
      const fileName = fileNameParts[fileNameParts.length - 2];

      const routeParamMatch = fileName.match(/^\[([^]+)\]$/);

      const routeParam = routeParamMatch ? routeParamMatch[1] : '';

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
          method: path.node.id?.name || '',
          doc: {
            variables: [],
            conditionals: [],
            errors: [],
            comments: [],
            queryParams: [],
            routeParams: routeParam ? [routeParam] : [],
          },
          dependencies,
          redirects: [],
          rewrites: [],
        };

        if (path.node.leadingComments) {
          path.node.leadingComments.forEach(comment => {
            const value = content.substring(comment.start!, comment.end!);
            currentHandler!.doc.comments.push({
              value,
              line: comment.loc!.start.line,
            });
          });
        }
      }

      if (currentHandler) {
        const currentLineNumber = path.node.loc?.start.line || 0;

        if (
          t.isCallExpression(path.node) &&
          t.isMemberExpression(path.node.callee) &&
          t.isIdentifier(path.node.callee.property) &&
          path.node.callee.property.name === 'get' &&
          t.isStringLiteral(path.node.arguments[0])
        ) {
          const [queryParam] = path.node.arguments;

          if (queryParam) {
            currentHandler.doc.queryParams.push(queryParam.value);
          }
        }

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
            currentHandler!.doc.comments.push({
              value,
              line: comment.loc!.start.line,
            });
          });
        }

        // Check if it's a new Response instantiation call
        if (
          t.isNewExpression(path.node) &&
          t.isIdentifier(path.node.callee) &&
          path.node.callee.name === 'Response'
        ) {
          const statusArg = path.node.arguments[1];
          if (t.isObjectExpression(statusArg)) {
            for (const prop of statusArg.properties) {
              if (
                t.isObjectProperty(prop) &&
                t.isIdentifier(prop.key) &&
                prop.key.name === 'status' &&
                t.isNumericLiteral(prop.value)
              ) {
                const statusValue = prop.value.value;
                if (!isHttpStatusValid(statusValue)) {
                  const value = content.substring(path.node.start!, path.node.end!);
                  currentHandler.doc.errors.push({ value, line: currentLineNumber });
                }
              }
            }
          }
        }

        if (t.isCallExpression(path.node)) {
          // Check if it's a NextResponse.json call or a Response.json call
          if (
            t.isMemberExpression(path.node.callee) &&
            t.isIdentifier(path.node.callee.object) &&
            (path.node.callee.object.name === 'NextResponse' ||
              path.node.callee.object.name === 'Response') &&
            t.isIdentifier(path.node.callee.property) &&
            (path.node.callee.property.name === 'json' || path.node.callee.property.name === 'next')
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

        // Check if has a redirect
        if (t.isCallExpression(path.node)) {
          // Check if it's a NextResponse.json call
          if (
            t.isMemberExpression(path.node.callee) &&
            t.isIdentifier(path.node.callee.object) &&
            (path.node.callee.object.name === 'NextResponse' ||
              path.node.callee.object.name === 'Response') &&
            t.isIdentifier(path.node.callee.property) &&
            path.node.callee.property.name === 'redirect'
          ) {
            // Check if it has an error redirect argument
            if (path.node.arguments.length >= 2) {
              const [redirectURLArgument, redirectStatusArgument] = path.node.arguments as [
                t.NewExpression,
                t.NumericLiteral,
              ];
              const redirectURL = redirectURLArgument.arguments
                .map(currentArgument => (currentArgument as t.StringLiteral).value)
                .reverse()
                .join('');

              currentHandler.redirects.push({
                value: redirectURL,
                status: redirectStatusArgument.value,
                line: currentLineNumber,
              });
            }
          }
        }

        // Check if has a rewrite
        if (t.isCallExpression(path.node)) {
          // Check if it's a NextResponse.json call
          if (
            t.isMemberExpression(path.node.callee) &&
            t.isIdentifier(path.node.callee.object) &&
            (path.node.callee.object.name === 'NextResponse' ||
              path.node.callee.object.name === 'Response') &&
            t.isIdentifier(path.node.callee.property) &&
            path.node.callee.property.name === 'rewrite'
          ) {
            // Check if it has an error rewrite argument
            if (
              path.node.arguments.length === 2 &&
              path.node.arguments[0].type === 'NewExpression' &&
              path.node.arguments[1].type === 'ObjectExpression'
            ) {
              const [rewriteURLArgument, rewriteStatusArgument] = path.node.arguments as [
                t.NewExpression,
                t.ObjectExpression,
              ];
              const rewriteURL = rewriteURLArgument.arguments
                .map(currentArgument => (currentArgument as t.StringLiteral).value)
                .reverse()
                .join('');
              const rewriteStatusKey = rewriteStatusArgument.properties.find(prop => {
                const statusKey = (prop as t.ObjectProperty).key as t.Identifier;

                return statusKey.name === 'status';
              });
              const rewriteStatusValue = (rewriteStatusKey as t.ObjectProperty)
                .value as t.NumericLiteral;
              const rewriteStatus = rewriteStatusValue.value;

              currentHandler.rewrites.push({
                value: rewriteURL,
                status: rewriteStatus,
                line: currentLineNumber,
              });
            }
          }
        }
      }
    },
  });

  return currentHandler;
}
