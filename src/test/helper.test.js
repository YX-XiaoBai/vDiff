// const puppeteer = require('puppeteer')
// const { click } = require('./helper')
// const { getText } = require('./helper')
// const { getCount } = require('./helper')
// const { typeText } = require('./helper')
// const { shouldNotExist } = require('./helper')

// describe('Test functions', () => {
// 	it('Generate puppeteer function', async () => {
// 		const browser = await puppeteer.launch({ headless: true })
// 		const page = await browser.newPage()
// 		await page.goto('https://devexpress.github.io/testcafe/example/')

// 		const Msg = await getText(page, 'h1')
// 		console.log('Heading text: ' + Msg)
// 		const count = await getCount(page, 'p')
// 		console.log('Count p tag in the page ' + count)
// 		await typeText(page, '#developer-name', 'xiaobai')

// 		await shouldNotExist(page, '#testcafe-rank')
// 		await click(page, '#remote-testing')

// 		// Assertion
// 		// expect(Msg).toBe.a('string', 'Example')
// 		// expect(count).toBe(9)
// 		expect(Msg).toBe('Example')
// 		expect(Msg).toMatch('xam')

// 		// Close browser
// 		await browser.close()
// 	})
// })
