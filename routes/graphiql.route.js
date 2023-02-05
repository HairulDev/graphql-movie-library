const express = require("express");
const router = express.Router();
const { GraphQLSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");

const { queryType, mutationType } = require("../resolvers/index.js");

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

router.use(
  "/graphiql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

module.exports = router;
