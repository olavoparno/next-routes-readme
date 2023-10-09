const path = require('path');

const buildEslintCommand = filenames =>
  `eslint --fix ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`;

const buildPrettierCommand = filenames =>
  `prettier ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')} --write`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
};
