const logger = require("../../config/log")

const {
  ERROR,
  REMIND,
  IMAGE_TYPE
} = require('../config/constants')

module.exports = {
  /**
   * Judge the type of image
   *
   * @method async
   * @param string
   * @returns *
   */
  imageJudge: async function(imageType) {
    switch (imageType) {
      case '.png':
        logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
        break
      case '.jpg':
        logger.info('The image type' + REMIND(`${imageType}`) + ' is correct.')
        break
      case '.gif':
        logger.info('The image type ' + REMIND(`${imageType}`) + ' is correct.')
        break
      default:
        logger.error('Sorry, we do not support' + ERROR(`${imageType}`) + 'type.')
        return
    }
  },
  imageExist: async function(dir, path) {
    if(!path && !dir) {
      files = fs.readdirSync(dir)
      for(var i = 0; i < dir.length; i++) {
        if(dir[i].match(path)) break
        else {
          logger.error('Cannot find the file ' + `${path}` + ` in ` + `${dir}`)
          return
        }
      }
    } else {
      logger.error('Lack of one of params')
      return
    }
  }
}