import { execSync } from 'child_process'

export const execSyncTrimmedString = (command: string): string => {
  return execSync(command).toString().trim()
}
