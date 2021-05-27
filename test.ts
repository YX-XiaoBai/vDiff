const openNewWindow = (url: string) => {

  if (!url.trim()) {
    throw Error('openNewWindow params - url is required')
  }
  const randomId = new Date().getTime.toString()
  const tempTagA = document.createElement('a')
  tempTagA.setAttribute('href', url)
  tempTagA.setAttribute('target', '_blank')
  tempTagA.setAttribute('id', randomId)
  console.log(tempTagA.getAttribute('href'))
  tempTagA.style.display = 'none'
  if (!document.getElementById(randomId)) {
    document.body.appendChild(tempTagA)
  }
  tempTagA.click()
  document.body.removeChild(tempTagA)
}

openNewWindow('')
// openNewWindow('https://www.baidu.com')