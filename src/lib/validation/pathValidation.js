const fs = require('fs'),
      logger = require('../../config/log')

const {
    REMIND,
} = require('../config/constants')

module.exports = {
  /**
   * Judge file or dir path if exist
   *
   * @method async
   * @param string
   * @returns *
   */
  rootExist: async function(dir) {
    if (!fs.existsSync(dir)){
      logger.warn('Dir ' + REMIND(`${dir}`) + ' is not exist!')
      fs.mkdirSync(dir, {recursive: true})
      logger.info('Dir ' + REMIND(`${dir}`) + ' is created!')
    }
  },
  fileExist: async function(path) {
    if (fs.existsSync(path)) {
      logger.info('File ' + REMIND(`${path}`) + ' is exist!')
    } else {
      logger.error('File ' + REMIND(`${path}`) + ' is not exist!')
      return
    }
  },
  /**
   * Judge path if exist
   *
   * @method async
   * @param string
   * @returns *
   */
  pathEmpty: async function(path) {
    if (!path || path == null || path.length === 0 || /^\s*$/.test(path) ) {
      logger.error('Path is cannot be empty!')
      return
    }
  },
  /**
   * Judge url if exist
   *
   * @method async
   * @param string
   * @returns *
   */
  urlEmpty: async function(url) {
    if ( !url || url == null || url.length === 0 || /^\s*$/.test(url) ) {
      logger.error('Url is cannot be empty!')
      return
    }
  }
}