module.exports = {
	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector)
		} catch (err) {
			throw new Error('Could not click on' + { selector })
		}
	},
	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, (element) => element.textContent)
		} catch (err) {
			throw new Error('Could not getText from selector' + { selector })
		}
	},
	getCount: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, (element) => element.length)
		} catch (err) {
			throw new Error('Could not found the element' + { selector })
		}
	},
	typeText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text)
		} catch (err) {
			throw new Error('Could not found the element typeText')
		}
	},
	shouldNotExist: async function (page, selector) {
		try {
			await page.waitForSelector(selector, { hidden: true })
		} catch (err) {
			throw new Error('Could not found the element shouldNotExist')
		}
	},
}
