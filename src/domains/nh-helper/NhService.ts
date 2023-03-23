import UserAgent from 'user-agents'
import puppeteer from 'puppeteer'
import { sleep } from '../../utils/sleep'
import { myEnvs } from '../../utils/myEnvs'

export class NhService {
  async scrape() {
    const browser = await puppeteer.launch({
      headless: false,
    })
    const page = await browser.newPage()
    await page.setUserAgent(new UserAgent().random().toString())

    await page.goto(myEnvs.NH_URL)

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 })
    // await 5 seconsd
    await sleep(100000000)

    // Type into search box
    await page.type('.search input', 'automate beyond recorder')

    // Wait and click on first result
    const searchResultSelector = '.search-box__link'
    await page.waitForSelector(searchResultSelector)
    await page.click(searchResultSelector)

    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    )
    const fullTitle = await textSelector?.evaluate((el) => el.textContent)

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle)

    await browser.close()
  }
}
