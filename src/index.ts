#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { traverseDirectory } from './utils/traverseDictory';
import { generateMarkdownOutput } from './utils/generateMarkdown';
import { checkIfFolderExists } from './utils/validator';

const folderPath = process.argv[2];

fs.writeFileSync(constants.markdownFilename, '');

async function main() {
  let currentFileNumber = 1;

  await traverseDirectory(folderPath, async file => {
    try {
      if (
        file.endsWith(`${constants.routeFilename}.ts`) ||
        file.endsWith(`${constants.routeFilename}.js`)
      ) {
        const currentHandler = parseRouteHandlers(file);

        if (currentHandler) {
          return await generateMarkdownOutput(currentHandler, file, currentFileNumber++);
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

    console.log(`Finished. Please check ${filePath}`);
  })
  .catch(error => console.error(error.message));
