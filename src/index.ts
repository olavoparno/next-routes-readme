#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { traverseDirectory } from './utils/traverseDictory';
import { generateMarkdownOutput } from './utils/generateMarkdown';
import { checkIfFolderExists } from './utils/validator';
import { addTableOfContents } from './utils/addTableOfContents';
import { getArgumentValue } from './utils/getArguments';

const projectRoot = getArgumentValue('dir');

fs.writeFileSync(constants.markdownFilename, '');

const currentFiles: { file: string; index: number }[] = [];
let noRoutes = true;

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
        file.endsWith(`${constants.middlewareFilename}.ts`)
      ) {
        noRoutes = false;

        const currentHandler = parseRouteHandlers(file);

        if (currentHandler) {
          currentFiles.push({ file, index: currentFiles.length + 1 });
          return generateMarkdownOutput(currentHandler, file, currentFiles.length);
        }
      }
    } catch (error) {
      return Promise.reject(
        new Error(`Error while parsing file ${file}. ${(error as Error).message}.`)
      );
    }
  });

  if (noRoutes) {
    throw new Error(`There are no Next.js Route files for path ${projectRoot}.`);
  }
}

checkIfFolderExists(projectRoot)
  .then(() => main())
  .then(() => {
    const filePath = path.resolve(projectRoot, constants.markdownFilename);

    console.log(
      `Finished. Created docs for ${currentFiles.length} ${
        currentFiles.length > 1 ? 'routes' : 'route'
      }. Please check ${filePath}`
    );
  })
  .then(() => {
    if (currentFiles.length > 0) {
      return addTableOfContents(currentFiles);
    }
  })
  .catch(error => console.error(error.message));
