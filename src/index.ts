#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { traverseDirectory } from './utils/traverseDictory';
import { generateMarkdownOutput } from './utils/generateMarkdown';
import { checkIfFolderExists } from './utils/validator';
import { addTableOfContents } from './utils/addTableOfContents';

const folderPath = process.argv[2];

fs.writeFileSync(constants.markdownFilename, '');

const currentFiles: { file: string; index: number }[] = [];

async function main() {
  await traverseDirectory(folderPath, async file => {
    try {
      if (
        file.endsWith(`${constants.routeFilename}.ts`) ||
        file.endsWith(`${constants.routeFilename}.js`)
      ) {
        const currentHandler = parseRouteHandlers(file);

        if (currentHandler) {
          currentFiles.push({ file, index: currentFiles.length + 1 });
          return generateMarkdownOutput(currentHandler, file, currentFiles.length);
        }
      }
    } catch {
      return Promise.reject(new Error(`Error while parsing file ${file}.`));
    }
  });
}

checkIfFolderExists(folderPath)
  .then(() => main())
  .then(() => {
    const projectRoot = path.resolve(process.cwd());
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
