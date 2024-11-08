import fs from 'fs/promises';
import path from 'path';

export async function traverseDirectory(
  directory: string,
  fileCallback: (file: string, parentFolderName: string) => Promise<void>,
  parentFolderName = ''
) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await traverseDirectory(filePath, fileCallback, path.join(parentFolderName, file));
      } else {
        await fileCallback(filePath, parentFolderName);
      }
    }
  } catch (error) {
    return Promise.reject(
      new Error(`Error while traversing directory ${directory}. ${(error as Error).message}`)
    );
  }
}
