const puppeteer = require('puppeteer'),
    logger = require('../config/log')

const {
  ERROR,
  WARNING,
  REMIND,
  PASS,
  IMAGE_TYPE,
} = require('./config/constants')

const {
  head,
  isStr
} = require('./utils/utils')

const {
  rootExist,
  urlEmpty
} = require('./validation/pathValidation')

var imgBase = __dirname + '/pageShot/'

var random = getSalt()
const imgType = head(IMAGE_TYPE)

/**
 * Get the screenshot on page
 *
 * @method async
 * @param string
 * @returns *
 */
module.exports = async function pageShot(url) {
  rootExist(imgBase)
  /**
   * Deal with the scene with empty URL
   */
  urlEmpty(url)
  // if ( !url || url == null || url.length === 0 || /^\s*$/.test(url) ) {
  //   logger.error('Url is cannot be empty!')
  //   return
  // }
  /**
   * Meet the conditions
   */
  if (isStr(url)) {
    /**
     * Define default path variables
     * imageUrl: Picture screenshot path
     */
    var shotPath = imgBase + 'PageShot_' + random + imgType
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1920, height: 945 })
      await page.goto(url)
      await page.screenshot({ path: shotPath, fullPage: true})
      await page.close()
      logger.info('Image ' + REMIND(`${shotPath}`) + ' captured successfully!')
      return
    } catch(error) {
      logger.error('Image ' + ERROR(`${shotPath}`) + ' captured failed!')
      throw error
    }
  } else {
    logger.error('Input url ' + ERROR(`${url}`) + ' format error!')
    return
  }
}

