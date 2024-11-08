import fs from 'fs';

export async function checkIfFolderExists(folderPath: string) {
  try {
    const stat = fs.statSync(folderPath);

    return Promise.resolve(stat.isDirectory());
  } catch {
    return Promise.reject(
      new Error(
        `The folder ${folderPath === '' ? '<blank>' : folderPath} does not exist.\n\nDid you run with 'npx next-routes-readme --dir=path/to/app'?\n\nPlease make sure you have a Next.js App Dir with valid API routes.\nhttps://nextjs.org/docs/app/api-reference/file-conventions/route`
      )
    );
  }
}
