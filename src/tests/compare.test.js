const {
  pathCompareUrl,
  urlCompareUrl,
  pathComparePath
} = require('../lib/compare')

describe('Test function', () => {
  beforeEach(() => {
    setTimeout(9000)
  });
  it('pathCompareUrl: normal case', async () => {
    await pathCompareUrl('PageShot_Q1NTAx.png','https://www.baidu.com')
  })
  // it('urlCompareUrl: normal case', async () => {
  //   await urlCompareUrl('https://www.baidu.com','https://www.baidu.com')
  // })
  // it('pathComparePath: normal case', async () => {
  //   await pathComparePath('PageShot_Q1NTAx.png','ageShot_Q1NTAx.png')
  // })
});