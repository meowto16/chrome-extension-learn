document.addEventListener('DOMContentLoaded', function() {
  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.bears).forEach(url => {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.bears[url]}`
    document.body.appendChild(div)
  })
}, false)
