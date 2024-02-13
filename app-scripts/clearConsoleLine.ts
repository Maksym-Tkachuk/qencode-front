export const clearConsoleLine = (): void => {
  process.stdout.write(`\r${' '.repeat(process.stdout.columns - 1)}\r`)
}
