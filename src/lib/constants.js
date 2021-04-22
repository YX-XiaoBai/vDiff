const chalk = require('chalk')

const REMIND = chalk.blueBright

const PASS = chalk.bold.greenBright

const ERROR = chalk.bold.redBright

const WARNING = chalk.yellowBright

const DISPLAY_HEADERS = ['Total_Pixels', 'Difference', 'Status']

module.exports = {
  ERROR,
  WARNING,
  REMIND,
  PASS,
  DISPLAY_HEADERS,
}