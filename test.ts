import { NhService } from './src/domains/nh-helper/NhService'

const service = new NhService()

// await
async function execute() {
  await service.scrape()
  console.log('success')
}

execute()
