const state = {
  loaded: {},
  injected: {}
}

const toggleIn = ({ id: tab_id }) => {
  // toggle out: it's currently loaded and injected
  if (state.loaded[tab_id] && state.injected[tab_id]) {
    chrome.tabs.executeScript(tab_id, { file: 'toolbar/eject.js' })
    state.injected[tab_id] = false
    // chrome.storage.sync.remove([storagekey])
  }

  // toggle in: it's loaded and needs injected
  else if (state.loaded[tab_id] && !state.injected[tab_id]) {
    chrome.tabs.executeScript(tab_id, { file: 'toolbar/inject.js' })
    state.injected[tab_id] = true
    getColorMode()
  }

  // fresh start in tab
  else {
    chrome.tabs.insertCSS(tab_id, { file: 'toolbar/bundle.css' })
    chrome.tabs.executeScript(tab_id, { file: 'web-components.polyfill.js' })
    chrome.tabs.executeScript(tab_id, { file: 'toolbar/bundle.js' })
    chrome.tabs.executeScript(tab_id, { file: 'toolbar/inject.js' })

    state.loaded[tab_id] = true
    state.injected[tab_id] = true
    getColorMode()
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('BACK _SD', tabs)
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' })
  })

  chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
    console.log(msg, 'IN BACKGROUND SIDE')
    // If we don't return anything, the message channel will close, regardless
    // of whether we called sendResponse.
  })
  chrome.tabs.onUpdated.addListener(function (tabId) {
    if (tabId === tab_id) state.loaded[tabId] = false
  })
}
