module.exports = {
  /**
   * Gets the first element of `array`
   *
   * @method async
   * @param array
   * @returns *
   */
  head: async function(array) {
    return array && array.length ? array[0] : undefined
  },
  /**
   * Gets the last element of `array`
   *
   * @method async
   * @param array
   * @returns *
   */
  last: async function(array) {
    return array && array.length ? array[array.length-1] : undefined
  },
  /**
   * Judge str is string or not
   *
   * @method async
   * @param string
   * @returns *
   */
  isStr: async function(str) {
    return typeof str ==='string' ? true : false
  }
}