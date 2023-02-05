const express = require("express");
const router = express.Router();
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const { Movie, Actor, Author } = require("../models");

const schema = buildSchema(`
  type Query {
    messages: String
    movies: Int
    actors: Int
    authors: Int
  }
`);
const root = {
  messages: async () => "Hi There, Welcome to Movie Library",
  movies: async () => {
    const movies = await Movie.count({});
    return movies;
  },
  actors: async () => {
    const actors = await Actor.count({});
    return actors;
  },
  authors: async () => {
    const authors = await Author.count({});
    return authors;
  },
};

router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
