const logger = require('../../config/log')
const { base64Encode } = require('./base64Encode')

module.exports = {
    /**
     * Get unique string
     *
     * @method async
     * @property getSalt()
     * @param null
     * @returns string
     */
    getSalt: function() {
            var milliseconds = new Date().getTime();
            var timestamp = (milliseconds.toString()).substring(9, 13)
            var random = ("" + Math.random()).substring(2, 8);
            /**
             * string will be unique because timestamp never repeat itself
             * u can set size here of return string
             */
            var random_number = timestamp+random;
            var random_string = base64Encode(random_number).substring(2, 8);
            logger.debug("number base64Encode convert successfully!")
            var return_string = '';
            var Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
            /**
             * check here whether string is alphanumeric or not
             */
            if (random_string.match(Exp)) {
                return_string = random_string;
                logger.debug("Get salt successfully!")
                logger.debug(typeof return_string)
                return return_string
            }
            else {
                // logger.warn("Generate string maybe is not alphanumeric.")
                /**
                 * Recursive call
                 */
                return getSalt();
            }
            // return new Promise((resolve, reject) => {
            //     resolve(return_string)
            //     reject(return_string)
            // })
        }
}