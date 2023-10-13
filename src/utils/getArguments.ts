/**
 * Gets the node argument value or returns false
 * @param argName the argument name without trailing hyphens i.e. --
 * @example getArgumentValue('dir')
 * @returns string | false
 */
export const getArgumentValue = (argName: string): string => {
  const args = process.argv
    .filter(item => (item.startsWith('--') && item.indexOf(argName) >= 0 ? item : ''))
    .toString();

  return args ? args.replace(`--${argName}=`, '').replace(/["']/g, '') : '';
};
