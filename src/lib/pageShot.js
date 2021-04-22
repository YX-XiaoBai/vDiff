const puppeteer = require('puppeteer'),
    logger = require('../config/log'),
    getSalt = require('./getSalt')
var imgBase = __dirname + '/../../pageShot/',
    imgType = '.png',
    random = getSalt()

/**
 * function type: async
 * param: url
 */
module.exports = async function pageShot(url) {
  /**
   * Deal with the scene with empty URL
   */
  if ( !url || url == null || url.length === 0 || /^\s*$/.test(url) ) {
    logger.error('Url is cannot be empty!')
    return
  }
  /**
   * Meet the conditions
   */
  if (typeof url === 'string') {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1920, height: 945 })
      await page.goto(url)
      await page.screenshot({ path: imgBase + 'PageShot_' + random + imgType, fullPage: true})
      await page.close()
      logger.info('Image captured successfully!')
      return
    } catch(error) {
      logger.error('Image captured failed!')
      throw error
    }
  } else {
    logger.error('Input url format error!')
    return
  }
}

