import fs from 'fs';
import traverse from '@babel/traverse';
import * as parser from '@babel/parser';
import * as t from '@babel/types';
import { Item, RouteHandler } from '../types/route-handler';
import { isHttpStatusValid } from '../utils/isHttpStatusValid';
import { constants } from '../config/constants';

function getHttpMethod(name: string) {
  const httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

  return httpMethods.find(method => name.toUpperCase().startsWith(method)) || false;
}

function getArrowFunctionWithNameWithinHttpMethods(node: t.Node) {
  if (node.type !== 'ExportNamedDeclaration') return false;

  let possibleRouteName =
    node.type === 'ExportNamedDeclaration' &&
    node.declaration?.type === 'VariableDeclaration' &&
    node.declaration.declarations[0].type === 'VariableDeclarator' &&
    node.declaration.declarations[0].id.type === 'Identifier' &&
    node.declaration.declarations[0].id.name;

  if (possibleRouteName) return getHttpMethod(possibleRouteName);

  possibleRouteName =
    node.type === 'ExportNamedDeclaration' &&
    node.declaration?.type === 'FunctionDeclaration' &&
    node.declaration?.async &&
    node.declaration.id?.type === 'Identifier' &&
    node.declaration.id.name;

  if (!possibleRouteName) return false;

  return getHttpMethod(possibleRouteName);
}

function getRoutePath(projectRoot: string, routeFile: string) {
  const normalizedProjectRoot = projectRoot.replace('./', '');
  const normalizedFileName = routeFile
    .replace(normalizedProjectRoot, '')
    .replace(/.ts|.js/, '')
    .replace('/route', '');
  const normalizedFileNameWithSlash = normalizedFileName.startsWith('/')
    ? normalizedFileName
    : `/${normalizedFileName}`;
  // remove app, src and api from name path
  const normalizedFileNameWOApp = normalizedFileNameWithSlash.replace(/\/app|\/src|\/api/g, '');
  const routePath = `/api${normalizedFileNameWOApp.startsWith('/') ? '' : '/'}${normalizedFileNameWOApp}`;

  return routePath;
}

export function parseRouteHandlers(routeFile: string, projectRoot: string): RouteHandler | null {
  const content = fs.readFileSync(routeFile, 'utf-8');
  const dependencies: Item[] = [];
  const isMiddleware =
    routeFile.endsWith(`${constants.middlewareFilename}.ts`) ||
    routeFile.endsWith(`${constants.middlewareFilename}.js`);

  let currentHandler: RouteHandler | null = null;

  const ast = parser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    enter(path) {
      if (
        t.isTSTypeAliasDeclaration(path.node) ||
        t.isTSInterfaceDeclaration(path.node) ||
        t.isTSEnumDeclaration(path.node)
      ) {
        path.skip(); // Skip traversal for TypeScript-specific nodes
        return;
      }

      if (t.isImportDeclaration(path.node)) {
        dependencies.push({
          value: path.toString(),
          line: path.node.loc!.start.line,
        });
      }

      // Extract dynamic route parameter from the file name
      const fileNameParts = routeFile.split('/').filter(Boolean);

      // Match route parameters, capturing both single `[param]` and multi `[...param]` cases
      const routeParamMatches = fileNameParts.filter(
        part => part.startsWith('[') && part.endsWith(']')
      );

      // Initialize an object to hold both single and multiple dynamic route parameters
      const routeParams: { [key: string]: unknown | string[] } = {};

      // Loop through the matched route parameters and process them
      routeParamMatches.forEach(param => {
        const isArrayParam = param.startsWith('[...'); // Check if it's a multi-param (e.g., [...subMultipleDynamicRoutes])
        const paramName = param.replace(/[[]]/g, '').replace('...', ''); // Remove brackets and ellipsis

        // If it's a multi-param, store it as an empty array, else store as 'any' type (null in this case)
        if (isArrayParam) {
          routeParams[paramName] = [];
        } else {
          routeParams[paramName] = {};
        }
      });

      const possibleHttpRoute = getArrowFunctionWithNameWithinHttpMethods(path.node);

      // Check for async function declaration
      if (possibleHttpRoute) {
        const name =
          possibleHttpRoute ||
          (path.node as t.FunctionDeclaration)?.id?.name ||
          (path.container as t.FunctionDeclaration)?.id?.name ||
          '';
        const isFunctionDeclaration = t.isFunctionDeclaration(path.node);

        const params =
          'params' in path.node &&
          path.node.params.length > 0 &&
          path.node.params.map(param => content.substring(param.start!, param.end!)).join(', ');
        const returnType =
          'returnType' in path.node && path.node.returnType?.start && path.node.returnType?.end
            ? content.substring(path.node.returnType?.start, path.node.returnType?.end)
            : '';

        // Initialize `currentHandler` with new `routeParams` that can hold both single and multi params
        currentHandler = {
          implementation: isFunctionDeclaration
            ? `async function ${name}(${params ?? ''})${returnType ?? ''}`
            : `const ${name} = async (${params})${returnType ?? ''}`,
          name,
          method: isMiddleware ? 'GET' : getHttpMethod(name) || '<unable_to_determine>',
          routePath: getRoutePath(projectRoot, routeFile),
          file: routeFile,
          doc: {
            variables: [],
            conditionals: [],
            errors: [],
            comments: [],
            queryParams: [],
            routeParams,
            requestBody: null,
          },
          dependencies,
          redirects: [],
          rewrites: [],
          cURL: '',
          isMiddleware,
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

        // check if request body is present
        if (
          t.isVariableDeclarator(path.node) &&
          t.isObjectPattern(path.node.id) &&
          t.isAwaitExpression(path.node.init) &&
          t.isCallExpression(path.node.init.argument) &&
          t.isMemberExpression(path.node.init.argument.callee) &&
          t.isIdentifier(path.node.init.argument.callee.property) &&
          path.node.init.argument.callee.property.name === 'json'
        ) {
          // Initialize the requestBody object in the current handler documentation
          const requestBodyObject: Record<string, string> = {};

          // Loop through properties in the destructured pattern
          for (const property of path.node.id.properties) {
            if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
              requestBodyObject[property.key.name] = '<value>'; // Set each property with a placeholder
            }
          }

          // Assign the generated object to the current handler's requestBody documentation
          currentHandler.doc.requestBody = requestBodyObject;
        }

        // 'http://localhost:3000:dynamicRoute/${dynamicRoute},:subMultipleDynamicRoutes/${subMultipleDynamicRoutes}/'
        if (currentHandler && !isMiddleware) {
          let cURL = `curl -X ${currentHandler.method.toUpperCase()} 'http://localhost:3000${currentHandler.routePath}`;

          if (currentHandler.doc.routeParams) {
            const routeParamsString = `/${Object.keys(routeParams)
              .map(currentParamKey => currentParamKey)
              .join('/')}`;

            cURL = `curl -X ${currentHandler.method.toUpperCase()} 'http://localhost:3000${routeParamsString}`;
          }

          if (currentHandler.doc.queryParams.length > 0) {
            const queryParamsString = currentHandler.doc.queryParams
              .map(param => `${param}=${param}`)
              .join('&');
            cURL += `?${queryParamsString}`;
          }

          cURL += ` --header 'Content-Type: application/json'`;

          // If the function has any request body (for POST, PUT, etc.), add a sample JSON payload
          if (
            currentHandler.doc.requestBody &&
            (currentHandler.method.toUpperCase() === 'POST' ||
              currentHandler.method.toUpperCase() === 'PUT')
          ) {
            // '{"key1": "value1", "key2": "value2"}'
            const body = currentHandler.doc.requestBody
              ? Object.keys(currentHandler.doc.requestBody)
                  .map(
                    currentKey =>
                      `\\"${currentKey}\\": \\"${currentHandler?.doc.requestBody?.[currentKey]}\\"`
                  )
                  .join(',')
              : '';

            cURL += ` --data '{ ${body} }'`;
          }

          currentHandler.cURL = `"${cURL}"`;
        }
      }
    },
  });

  return currentHandler;
}
