"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [__dirname + "/domain/**/*Resolver.{ts,js}"],
    validate: {
        forbidUnknownValues: false,
    },
});
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema,
    csrfPrevention: true,
    context: ({ req, res }) => ({ req, res }),
});
const app = (0, express_1.default)();
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({
        app,
    });
});
app.listen(process.env.PORT || 4000, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${apolloServer.graphqlPath}`);
});
