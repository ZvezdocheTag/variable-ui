chrome.browserAction.onClicked.addListener(toggleIn)
// console.log('MESSAGE 1')

chrome.contextMenus.create({
  id: 'launcher',
  title: 'Show/Hide',
  contexts: ['all']
})

chrome.contextMenus.onClicked.addListener(({ menuItemId }, tab) => {
  if (menuItemId === 'launcher') toggleIn(tab)
})
