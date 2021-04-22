const puppeteer = require('puppeteer'),
		BlinkDiff = require('blink-diff'),
		imgUrl = __dirname + '/blink-diff_img';


(async () => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.setViewport({ width: 1920, height: 945 })
	await page.goto('https://www.baidu.com')

	await page.screenshot({ path: imgUrl + 'Screenshots.png', fullPage: true })

	const imageA = imgUrl + 'Example.png'
	const imageB = imgUrl + 'Screenshots.png'
	const imageO = imgUrl + 'Diff.png'

	const ViewDiff = new BlinkDiff({
		imageAPath: imageA, //设计图
		imageBPath: imageB, //页面截图
		imageOutputPath: imageO, //Diff路径
		threshold: 0.02, // 1% threshold
		thresholdType: BlinkDiff.THRESHOLD_PERCENT,
		outputMaskRed: 0,
		outputMaskBlue: 255,
	})

	ViewDiff.run(function (error, result) {
		if (error) {
			throw error
		} else {
			console.log(ViewDiff.hasPassed(result.code) ? '通过' : '失败')
			console.log('总像素:' + result.dimension)
			console.log('发现:' + result.differences + ' 差异.')
		}
	})
	//关闭puppeteer
	await browser.close()
})()
