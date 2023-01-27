import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import 'reflect-metadata'
import { buildSchemaSync } from 'type-graphql'
import { myPrismaClient } from './utils/myPrismaClient'

const schema = buildSchemaSync({
  resolvers: [__dirname + '/domains/**/*Resolver.{ts,js}'],
  validate: {
    forbidUnknownValues: false, // I don't remember why I put this
  },
})

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,

  context: ({ req, res }) => ({ req, res, prisma: myPrismaClient }),
})

const app = express()

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({
    app,
  })
})

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT || 4000}${
      apolloServer.graphqlPath
    }`
  )
})
