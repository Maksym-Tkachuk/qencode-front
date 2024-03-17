/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk'

const dots = {
  interval: 80,
  frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
}

export const triggerSpinner = (message: string): NodeJS.Timeout => {
  let i = 0
  const interval = setInterval(() => {
    process.stdout.write(
      chalk.white.bgBlue(`\r INFO: `) + chalk.blue(` ${dots.frames[i]} ${message}`),
    )
    i = (i + 1) % dots.frames.length
  }, dots.interval)

  return interval
}
