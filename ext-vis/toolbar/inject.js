var visbug = document.createElement('div')
var btn = document.createElement('button')
visbug.classList.add('vis-bug')
btn.classList.add('theButton')
var src_path = chrome.extension.getURL(`tuts/guides.gif`)
btn.innerText = 'SOME BTN'
visbug.tutsBaseURL = src_path.slice(0, src_path.lastIndexOf('/'))

document.body.prepend(visbug)
document.body.prepend(btn)

chrome.runtime.onMessage.addListener((request, a, b) => {
  console.log(request, a, b)
  if (request.action === 'COLOR_MODE') visbug.colorMode = request.params.mode
})

document.addEventListener('click', e => {
  console.log('CLIKE')
  // chrome.runtime.sendMessage({ delayedResponse: 'e.target' })
  // if (e.target.value.contains('theButton')) {
  //   console.log(e.target)
  // }
})

document
  .querySelector('.tw-ta.tw-text-large.goog-textarea')
  .addEventListener('input', function (e) {
    console.log(e.target.value, 'WIL OK')
    chrome.runtime.sendMessage({ delayedResponse: e.target.value })
  })
// chrome.runtime.onMessage.addListener((request, a, b) => {
//   console.log(request, 'RECIEVE', a, b)
//   if (request.greeting == 'hello') {
//     console.log('HE')
//     // sendResponse({ farewell: 'goodbye' })
//   }
//   // if (request.action === 'COLOR_MODE') visbug.colorMode = request.params.mode
// })

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('MESSAGE', request, sender, sendResponse)
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   )
//   if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' })
// })
