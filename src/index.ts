#!/usr/bin/env node

import fs from 'fs';
import { constants } from './config/constants';
import { parseRouteHandlers } from './route-parser/parser';
import { traverseDirectory } from './utils/traverseDictory';
import { generateMarkdownOutput } from './utils/generateMarkdown';

async function main() {
  fs.writeFileSync('ROUTES.md', ''); // Clear existing content or create new file

  const folderPath = process.argv[2];

  await traverseDirectory(folderPath, async file => {
    try {
      if (
        file.endsWith(`${constants.routeFilename}.ts`) ||
        file.endsWith(`${constants.routeFilename}.js`)
      ) {
        const handlers = parseRouteHandlers(file);

        for (const handler of handlers) {
          await generateMarkdownOutput([handler], file);
        }
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });
}

main();
