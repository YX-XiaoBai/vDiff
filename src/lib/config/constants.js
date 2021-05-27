const chalk = require('chalk')

/**
 * @static
 * @property REMIND
 * @type {object}
 */

const REMIND = chalk.blueBright

/**
 * @static
 * @property PASS
 * @type {object}
 */

const PASS = chalk.bold.greenBright

/**
 * @static
 * @property ERROR
 * @type {object}
 */

const ERROR = chalk.bold.redBright

/**
 * @static
 * @property WARNING
 * @type {object}
 */

const WARNING = chalk.yellowBright

/**
 * @static
 * @property DISPLAY_HEADERS
 * @type {array}
 */

const DISPLAY_HEADERS = ['Total_Pixels', 'Difference', 'Status']

/**
 * @static
 * @property DISPLAY_HEADERS
 * @type {array}
 */

const IMAGE_TYPE = ['.png', '.jpg', '.gif', '.webp']

module.exports = {
  ERROR,
  WARNING,
  REMIND,
  PASS,
  DISPLAY_HEADERS,
  IMAGE_TYPE,
}