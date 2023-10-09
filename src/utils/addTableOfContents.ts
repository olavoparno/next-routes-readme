import fs from 'fs';
import { constants } from '../config/constants';

const removeSpecialCharactersFromFilename = (filename: string) => {
  return filename.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
};

export function addTableOfContents(
  currentFiles: {
    file: string;
    index: number;
  }[]
) {
  const markdownOutput = `# Table of Contents

${currentFiles
  .map(({ file, index }) => {
    return `- [Route ${index}](#route-${index}-${removeSpecialCharactersFromFilename(file)})`;
  })
  .join('\n')}`;

  const existingContent = fs.readFileSync(constants.markdownFilename, 'utf-8');
  const combinedContent = markdownOutput + existingContent;

  fs.writeFileSync(constants.markdownFilename, combinedContent);
}
