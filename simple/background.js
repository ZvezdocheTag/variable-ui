chrome.runtime.onMessage.addListener(function (message, callback) {
  console.log(message, 'UPFSPD')
  if (message == 'runContentScript') {
    chrome.tabs.executeScript({
      file: 'contentscript.js'
    })
  }
})
