import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import puppeteer from 'puppeteer-extra'
import UserAgent from 'user-agents'
import { NhService } from './src/domains/nh-helper/NhService'
import { myEnvs } from './src/utils/myEnvs'
import { sleep } from './src/utils/sleep'

puppeteer.use(StealthPlugin())

const userId = 'cldmecnxg0000j5kknybcpnl1'

// await
async function execute() {
  const service = new NhService()
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.setUserAgent(new UserAgent().random().toString())

  const NH_URL = myEnvs.NH_URL
  if (NH_URL === undefined) {
    return console.log('NhService: NH_URL is undefined')
  }
  await page.goto(NH_URL)

  // Set screen size
  await page.setViewport({ width: 1080, height: 900 })
  let isFavorites = page.url()

  while (!isFavorites.includes('favorites')) {
    await sleep(1000)
    isFavorites = page.url()
  }

  // fa fa-chevron-right
  let hasNext = await page.$('.fa.fa-chevron-right')
  while (hasNext) {
    const currentUrl = page.url()

    const pathnames = await page.evaluate(() => {
      const elements = document.querySelectorAll('a.cover')
      const urls = []
      for (let i = 0; i < elements.length; i++) {
        urls.push(elements[i].getAttribute('href'))
      }
      return urls
    })

    for (const pathname of pathnames) {
      if (pathname === null) {
        continue
      }

      await page.goto(NH_URL + pathname)

      // await class="tag-container field-name "
      const authorPathname = await page.evaluate(() => {
        const infoDiv = document.querySelector('#info')
        if (infoDiv === null) {
          return ''
        }

        const links = infoDiv.querySelectorAll('a')
        const authorLink = Array.from(links).find((l) =>
          l.href.includes('artist')
        )
        if (authorLink === undefined) {
          return ''
        }
        return authorLink.getAttribute('href')
      })

      if (!authorPathname) {
        continue
      }

      await service.saveFavorite({
        authorUrl: NH_URL + authorPathname,
        url: NH_URL + pathname,
        userId: userId,
      })
    }

    await page.goto(currentUrl)

    await page.click('.fa.fa-chevron-right')
    await sleep(1000)

    hasNext = await page.$('.fa.fa-chevron-right')
  }

  await browser.close()
  console.log('success')
}

execute()
