import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";

const schema = buildSchemaSync({
  resolvers: [__dirname + "/domain/**/*Resolver.{ts,js}"],
  validate: {
    forbidUnknownValues: false,
  },
});

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
  context: ({ req, res }) => ({ req, res }),
});

const app = express();

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({
    app,
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT || 4000}${
      apolloServer.graphqlPath
    }`
  );
});
