#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { traverseDirectory } from './utils/traverseDirectory';
import { generateMarkdownOutput } from './utils/generateMarkdown';
import { checkIfFolderExists } from './utils/validator';
import { addTableOfContents } from './utils/addTableOfContents';
import { getArgumentValue } from './utils/getArguments';
import { generateOpenAPISpec } from './utils/generateOpenApi';
import { RouteHandler } from './types/route-handler';

const projectRoot = getArgumentValue('dir');
const generateOpenAPI = getArgumentValue('openapi');

const outputRootDir = path.resolve(process.cwd(), constants.outputDir);

fs.mkdirSync(outputRootDir, { recursive: true });

const routeMDFilePath = path.resolve(outputRootDir, constants.markdownFilename);
const openAPIFilePath = path.resolve(outputRootDir, constants.openAPIFilename);

fs.writeFileSync(routeMDFilePath, '');

if (generateOpenAPI) {
  fs.writeFileSync(openAPIFilePath, '');
}

const currentFiles: { file: string; index: number }[] = [];
const currentRouteHandlers: RouteHandler[] = [];
let hasRoutes = false;

async function main() {
  if (!projectRoot) {
    throw new Error('Please provide a valid project root directory.');
  }

  console.log(`Generating docs for: ${projectRoot}`);

  await traverseDirectory(projectRoot, async file => {
    try {
      if (
        file.endsWith(`${constants.routeFilename}.ts`) ||
        file.endsWith(`${constants.routeFilename}.js`) ||
        file.endsWith(`${constants.middlewareFilename}.ts`) ||
        file.endsWith(`${constants.middlewareFilename}.js`)
      ) {
        hasRoutes = true;

        const currentHandler = parseRouteHandlers(file);

        if (currentHandler) {
          currentFiles.push({ file, index: currentFiles.length + 1 });
          currentRouteHandlers.push(currentHandler);

          return generateMarkdownOutput(currentHandler, file, routeMDFilePath);
        }
      }
    } catch (error) {
      return Promise.reject(
        new Error(`Error while parsing file ${file}. ${(error as Error).message}.`)
      );
    }
  });

  if (!hasRoutes) {
    throw new Error(`There are no Next.js Route files for path ${projectRoot}.`);
  }
}

async function handleOpenAPI() {
  if (generateOpenAPI) {
    generateOpenAPISpec(currentRouteHandlers, openAPIFilePath, projectRoot);
  }
}

checkIfFolderExists(projectRoot)
  .then(() => main())
  .then(() => handleOpenAPI())
  .then(() => {
    const filePath = path.resolve(outputRootDir, constants.markdownFilename);

    console.log(
      `Finished. Created docs for ${currentFiles.length} ${
        currentFiles.length > 1 ? 'routes' : 'route'
      }. Please check ${filePath}`
    );

    if (generateOpenAPI) {
      console.log(
        `\n\nOpenAPI spec generated at ${path.resolve(outputRootDir, constants.openAPIFilename)}`
      );
    }
  })
  .then(() => {
    if (currentFiles.length > 0) {
      return addTableOfContents(currentFiles, outputRootDir);
    }
  })
  .catch(error => console.error(error.message));
