import { exec } from 'child_process'
import { readFileSync } from 'fs'
import path from 'path'

import type pck from '../package.json'

import { clearConsoleLine } from '../app-scripts/clearConsoleLine'
import { startSpinner } from '../app-scripts/dotsSpinner'
import { execSyncTrimmedString } from '../app-scripts/execSyncTrimmedString'
import { logError, logInfo, logSuccess } from '../app-scripts/prettyLog'

const BRANCH_NAME_PATTERN = /^(feature|fix|infra)(\/.+)?|(dev|main)(\/.+)?$/gi

const { log } = console

const validateTypes = async (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const stagedFiles = execSyncTrimmedString('git diff --cached --name-only')

    if (!stagedFiles) {
      reject(new Error(`❌ No files are staged in the Git index.`))
    }

    const spinnerInterval = startSpinner('Running type checking')

    exec('npx tsc --noEmit', (error, stdout) => {
      clearInterval(spinnerInterval)
      clearConsoleLine()

      if (error) {
        if (stdout) {
          log(stdout)
        }

        reject(new Error('❌ An error occurred during type validation'))
      } else {
        logSuccess(`✅ Type validation successful, no errors found`)
        resolve()
      }
    })
  })
}

const validateCodeStyle = async (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const spinnerInterval = startSpinner('Checking code style')

    exec('npx lint-staged', (error, _stdout, stderr) => {
      clearInterval(spinnerInterval)
      clearConsoleLine()

      if (error) {
        if (stderr) {
          log(stderr)
        }

        reject(new Error(`❌ Code style does not follows the guidelines`))
      } else {
        logSuccess(`✅ Code style follows the guidelines`)
        resolve()
      }
    })
  })
}

const validateBranchName = async (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const branchName = execSyncTrimmedString('git rev-parse --abbrev-ref HEAD')

    if (branchName === 'main') {
      type PackageJson = typeof pck

      const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json')
      const packageJson = JSON.parse(
        readFileSync(PACKAGE_JSON_PATH, 'utf-8'),
      ) as PackageJson

      const email = execSyncTrimmedString('git config user.email')
      const userName = execSyncTrimmedString('git config user.name')
      const authorName = packageJson.author.name
      const authorEmail = packageJson.author.email

      if (userName === authorName && email === authorEmail) {
        logInfo(`email: ${email}`)
        logInfo(`username: ${userName}`)
        resolve()
      }
    }

    if (BRANCH_NAME_PATTERN.test(branchName)) {
      logSuccess(`✅ Branch name follows the guidelines`)
      resolve()
    } else {
      reject(
        new Error(
          `❌ Branch name does not follows the guidelines (Pattern: [feature|fix|infra]/description or dev | main)`,
        ),
      )
    }
  })
}

const runPreCommitScripts = async (): Promise<void> => {
  try {
    await validateTypes()
    await validateCodeStyle()
    await validateBranchName()
  } catch (error) {
    if (error instanceof Error) {
      logError(error.message)
    }

    process.exit(1)
  }
}

runPreCommitScripts()
