const puppeteer = require('puppeteer'),
    BlinkDiff = require('blink-diff'),
    logger = require('../config/log'),
    getSalt = require('./getSalt')

const {
    ERROR,
    WARNING,
    REMIND,
    PASS,
} = require('./constants')

var	pathCurr = __dirname + '/../../view-diff_img/curr_img/',
    pathRefer = __dirname + '/../../view-diff_img/refer_img/',
    pathDiff = __dirname + '/../../view-diff_img/diff_img/',
    imgType = '.png',
    random = getSalt()

/**
 * function type: async
 * params: path, url => (string)
 */
async function pathCompareUrl(path, url) {
  /**
   * define default path variables
   * imageDiff: Diff imageCurr & imagePath output diff-picture
   */
   var imageDiff = pathDiff + 'Diff_' + random + imgType

  /**
   * define default path variables
   * imagePath: Picture relative path
   */
  if ( !path || path == null || path.length === 0 || /^\s*$/.test(path) ) {
    logger.error('Path is cannot be empty!')
    return
  }
  if (typeof path === 'string') {
    var imagePath = pathRefer + path
    var imageType = imagePath.slice(-4)
    switch (imageType) {
      case '.png':
        logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
        break
      case '.jpg':
        logger.info('The image type' + REMIND(`${imageType}`) + ' is correct.')
        break
      default:
        logger.error('Sorry, we do not support' + ERROR(`${imageType}`) + 'type.')
        return
    }
  }

  /**
   * define default path variables
   * imageUrl: Picture screenShot path
   */
  var imageCurr = pathCurr + 'Curr_' + random + imgType

  if ( !url || url == null || url.length === 0 || /^\s*$/.test(url) ) {
    logger.error('Url is cannot be empty!')
    return
  }
  if (typeof url === 'string') {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1920, height: 945 })
      await page.goto(url)
      await page.screenshot({ path: imageCurr, fullPage: true})
      await page.close()
      logger.info('Image ' + REMIND(`${imageCurr}`) + ' captured successfully!')
    } catch(error) {
      logger.error('Image ' + ERROR(`${imageCurr}`) + ' captured failed!')
      throw error
    }
  } else {
    logger.error('Input url ' + ERROR(`${url}`) + ' format error!')
    return
  }

  const ViewDiff = new BlinkDiff({
    imageAPath: imageCurr,
    imageBPath: imagePath,
    imageOutputPath: imageDiff,
    threshold: 0.02,
    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    outputMaskRed: 0,
    outputMaskBlue: 255,
  })

  ViewDiff.run(function (error, result) {
    if (error) {
      logger.error("View Diff something go wrong!")
      throw error
    } else {
      let res = ViewDiff.hasPassed(result.code) ? PASS(' 通过 ') : ERROR(' 失败 ')
      logger.info('视觉感知对比结果: ' + res)
      logger.info('总像素: ' + result.dimension + WARNING(' Pixel '))
      logger.info('发现: ' + result.differences + WARNING(' Difference！'))
      // console.log(ViewDiff.hasPassed(result.code) ? '通过' : '失败')
      // console.log('总像素:' + result.dimension)
			// console.log('发现:' + result.differences + ' 差异.')
    }
  })
}

/**
 * function type: async
 * params: path, path2 => (string)
 */
 async function pathComparePath(path, path2) {
  /**
   * define default path variables
   * imageDiff: Diff imageCurr & imagePath output diff-picture
   */
   var imageDiff = pathDiff + 'Diff_' + random + imgType

  /**
   * define default path variables
   * imagePath: Picture relative path
   */
  if ( !path || path == null || path.length === 0 || /^\s*$/.test(path) ) {
    logger.error('Path is cannot be empty!')
    return
  }
  if (typeof path === 'string') {
    var imagePath = pathRefer + path
    var imageType = imagePath.slice(-4)
    switch (imageType) {
      case '.png':
        logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
        break
      case '.jpg':
        logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
        break
      default:
        logger.error('Sorry, we do not support ' + ERROR(`${imageType}`) + ' type.')
        return
    }
  }

  /**
   * define default path variables
   * imageCurr: Picture relative path
   */
     if ( !path2 || path2 == null || path2.length === 0 || /^\s*$/.test(path) ) {
      logger.error('path2 is cannot be empty!')
      return
    }
    if (typeof path2 === 'string') {
      var imageCurr = pathCurr + path2
      var imageType = imagePath.slice(-4)
      switch (imageType) {
        case '.png':
          logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
          break
        case '.jpg':
          logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
          break
        default:
          logger.error('Sorry, we do not support ' + ERROR(`${imageType}`) + ' type.')
          return
      }
    }

  const ViewDiff = new BlinkDiff({
    imageAPath: imagePath,
    imageBPath: imageCurr,
    imageOutputPath: imageDiff,
    threshold: 0.02,
    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    outputMaskRed: 0,
    outputMaskBlue: 255,
  })

  ViewDiff.run(function (error, result) {
    if (error) {
      logger.error("View Diff something go wrong!")
      throw error
    } else {
      logger.info('视觉感知对比结果: ' + ViewDiff.hasPassed(result.code) ? PASS(' 通过 ') : ERROR(' 失败 '))
      logger.info('总像素: ' + result.dimension)
      logger.info('发现: ' + result.differences + WARNING(' 差异！'))
      // console.log(ViewDiff.hasPassed(result.code) ? '通过' : '失败')
      // console.log('总像素:' + result.dimension)
			// console.log('发现:' + result.differences + ' 差异.')
    }
  })
}

/**
 * function type: async
 * params: url, url2 => (string)
 */
async function urlCompareUrl(url, url2) {
  /**
   * define default path variables
   * imageDiff: Diff imageCurr & imagePath output diff-picture
   */
  var imageDiff = pathDiff + 'Diff_' + random + imgType

  var url = decodeURI(url)
  var url2 = decodeURI(url2)
  /**
   * define default path variables
   * imageRefer: Refer picture
   */
  var imageRefer = pathRefer + 'Refer_' + random + imgType

  if ( !url || url == null || url.length === 0 || /^\s*$/.test(url) ) {
    logger.error('url: ' + `${url}` + ' is cannot be empty!')
    return
  }
  if (typeof url === 'string') {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1920, height: 945 })
      await page.goto(url)
      await page.screenshot({ path: imageRefer, fullPage: true})
      await page.close()
      logger.info('Image' + REMIND(`${imageRefer}`) + ' captured successfully!')
    } catch(error) {
      logger.error('Image' + REMIND(`${imageRefer}`) + ' captured failed!')
      throw error
    }
  } else {
    logger.error('Input url: ' + ERROR(`${url}`) + ' format error!')
    return
  }

  /**
   * define default path variables
   * imageCurr: Current picture
   */
  var imageCurr = pathCurr + 'Curr_' + random + imgType

  if ( !url2 || url2 == null || url2.length === 0 || /^\s*$/.test(url2) ) {
    logger.error('url2: ' + `${url2}` + ' is cannot be empty!')
    return
  }
  if (typeof url2 === 'string') {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1920, height: 945 })
      await page.goto(url2)
      await page.screenshot({ path: imageCurr, fullPage: true})
      await page.close()
      logger.info('Image ' + REMIND(`${imageCurr}`) + ' captured successfully!')
    } catch(error) {
      logger.error('Image ' + REMIND(`${imageCurr}`) + ' captured failed!')
      throw error
    }
  } else {
    logger.error('Input url2: ' + ERROR(`${url2}`) + ' format error!')
    return
  }

  const ViewDiff = new BlinkDiff({
    imageAPath: imageCurr,
    imageBPath: imageRefer,
    imageOutputPath: imageDiff,
    threshold: 0.02,
    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    outputMaskRed: 0,
    outputMaskBlue: 255,
  })

  ViewDiff.run(function (error, result) {
    if (error) {
      logger.error("View Diff something go wrong!")
      throw error
    } else {
      let res = ViewDiff.hasPassed(result.code) ? PASS(' 通过 ') : ERROR(' 失败 ')
      logger.info('diff_image path is ' + REMIND(`${imageDiff}`))
      logger.info('视觉感知对比结果: ' + res)
      logger.info('总像素: ' + result.dimension)
      logger.info('发现: ' + result.differences + WARNING(' 差异！'))
      // console.log(ViewDiff.hasPassed(result.code) ? '通过' : '失败')
      // console.log('总像素:' + result.dimension)
			// console.log('发现:' + result.differences + ' 差异.')
    }
  })
}

module.exports = {
  pathCompareUrl: pathCompareUrl,
  urlCompareUrl: urlCompareUrl,
  pathComparePath: pathComparePath,
}