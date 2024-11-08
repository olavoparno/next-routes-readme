import fs from 'fs';
import path from 'path';
import { constants } from '../config/constants';

const removeSpecialCharactersFromFilename = (filename: string) => {
  return filename.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
};

export function addTableOfContents(
  currentFiles: {
    file: string;
    index: number;
  }[],
  outputRootDir: string
) {
  const currentFilePath = path.resolve(outputRootDir, constants.markdownFilename);
  const markdownOutput = `# Table of Contents

${currentFiles
  .map(({ file, index }) => {
    return `- [Route ${index}](#${removeSpecialCharactersFromFilename(file)})`;
  })
  .join('\n')}\n`;

  const existingContent = fs.readFileSync(currentFilePath, 'utf-8');
  const combinedContent = markdownOutput + existingContent;

  fs.writeFileSync(currentFilePath, combinedContent);
}
