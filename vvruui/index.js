'use strict'

const puppeteer = require('puppeteer')
const path = require('path')
;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  //   console.log(`file:${path.join(__dirname, 'example/design-blocks/dist/call-to-action.html')}`)
  await page.goto(
    `file:${path.join(
      __dirname,
      'example/design-blocks/dist/call-to-action.html'
    )}`
  )
  //   await page.goto(
  //     '/Users/fronty/Documents/code/pets/variable-ui/example/design-blocks/dist/call-to-action.html'
  //   )
  //   await page.pdf({
  //     path: 'test.pdf',
  //     format: 'A4',
  //     margin: {
  //       top: '20px',
  //       left: '20px',
  //       right: '20px',
  //       bottom: '20px'
  //     }
  //   })
  //   await browser.close()
})()
