const puppeteer = require('puppeteer')

async function pp() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 945 })
  // await page.setViewport({ width: 1920, height: 945 })
  await page.goto('https://test.facode.cn/web/accounting#/map?namespace=v_200');
  await page.waitForTimeout(7000);
  await page.waitForSelector('.map-main > .card-wrapper > .learn-card-wrapper > .card-content > .learn-start-btn')
  await page.click('.map-main > .card-wrapper > .learn-card-wrapper > .card-content > .learn-start-btn')

  await page.waitForSelector('.space-wrapper > .space-main > .schedule-container > .current-task-container > .current-task-btn')
  await page.click('.space-wrapper > .space-main > .schedule-container > .current-task-container > .current-task-btn')

  await page.waitForSelector('.explain-wrapper > .explain-dashboard > .steps-wrapper > .btn > .icon-enter')
  await page.click('.explain-wrapper > .explain-dashboard > .steps-wrapper > .btn > .icon-enter')

  Button = await page.$eval('#app > div.wrapper > div > div.project-container > div.project-main.explain.single-col-explain > div.explain-wrapper > div > div > button', el => el.innerHTML);
  console.log(Button)

  await browser.close()
}

pp()


// resolve(Button);
// reject( error )
//  module.exports = scriptPromise11