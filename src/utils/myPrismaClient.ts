import { PrismaClient } from '@prisma/client'

export const myPrismaClient = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
  ],
})

myPrismaClient.$on('query', (e) => {
  console.log(`--------- ${e.timestamp.toLocaleTimeString()} -----------`)
  console.log('🔍 Query: ' + e.query)
  console.log('Params: ' + e.params)

  console.log('Duration: ' + e.duration + 'ms')
})
