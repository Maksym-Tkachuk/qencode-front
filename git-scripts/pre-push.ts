import { readFileSync } from 'fs'
import path from 'path'

import type pck from '../package.json'

import { syncRunTrimmed } from './helpers/syncRunTrimmed'
import { logError, logInfo } from './helpers/logs'

type PackageJson = typeof pck

const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json')
const packageJson = JSON.parse(
  readFileSync(PACKAGE_JSON_PATH, 'utf-8'),
) as PackageJson

const currentBranch = syncRunTrimmed('git rev-parse --abbrev-ref HEAD')

if (currentBranch === 'main') {
  const email = syncRunTrimmed('git config user.email')
  const userName = syncRunTrimmed('git config user.name')
  const authorName = packageJson.author.name
  const authorEmail = packageJson.author.email

  logInfo(`email: ${email}`)
  logInfo(`username: ${userName}`)

  if (userName !== authorName || email !== authorEmail) {
    logError(`You are not allowed to push to master branch`)
    process.exit(1)
  }
}
