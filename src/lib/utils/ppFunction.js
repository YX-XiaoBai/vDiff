module.exports = {
  launch: async function() {
  },
  goto: async function(url) {
    await page.goto(url)
  },
  setViewport: async function(width, height) {
    await page.setViewport({
      width: width,
      height: height
    })
  },

}