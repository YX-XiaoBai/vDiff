/**
 * Integration method
 */
module.exports = {
	/**
   * Click the selector on page
   *
   * @method async
   * @param <string,string>
   * @returns *
   */
	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector)
		} catch (err) {
			throw new Error('Could not click on' + { selector })
		}
	},
	/**
   * Get the text of selector on page
   *
   * @method async
   * @param <string,string>
   * @returns *
   */
	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, (element) => element.textContent)
		} catch (err) {
			throw new Error('Could not getText from selector' + { selector })
		}
	},
	/**
   * Get the number of selector on page
   *
   * @method async
   * @param <string,string>
   * @returns *
   */
	getCount: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, (element) => element.length)
		} catch (err) {
			throw new Error('Could not found the element' + { selector })
		}
	},
	/**
   * Get the number of selector on page
   *
   * @method async
   * @param <string,string>
   * @returns *
   */
	typeText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text)
		} catch (err) {
			throw new Error('Could not found the element typeText')
		}
	},
	/**
   * Judge the selector if not exist on page
   *
   * @method async
   * @param <string,string>
   * @returns *
   */
	shouldNotExist: async function (page, selector) {
		try {
			await page.waitForSelector(selector, { hidden: true })
		} catch (err) {
			throw new Error('Could not found the element shouldNotExist')
		}
	},
}
