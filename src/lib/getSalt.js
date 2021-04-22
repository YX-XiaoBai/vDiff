const logger = require('../config/log'),
    base64encode = require('./base64Encode')

/**
 * function type: normal
 */
module.exports = function getSalt() {
  var milliseconds = new Date().getTime();
  var timestamp = (milliseconds.toString()).substring(9, 13)
  var random = ("" + Math.random()).substring(2, 8);
  /**
   * string will be unique because timestamp never repeat itself
   * u can set size here of return string
   */
  var random_number = timestamp+random;
  var random_string = base64encode(random_number).substring(2, 8);
  logger.debug("number base64Encode convert successfully!")
  var return_string = '';
  var Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  /**
   * check here whether string is alphanumeric or not
   */
  if (random_string.match(Exp)) {
      return_string = random_string;
  } else {
      // logger.warn("Generate string maybe is not alphanumeric.")
      /**
       * Recursive call
       */
      return getSalt();
  }
  logger.debug("Get salt successfully!")
  logger.debug(typeof return_string)
  return return_string
}