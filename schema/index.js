const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");

const actorType = new GraphQLObjectType({
  name: "ActorType",
  description: "Actors on movie",
  fields: {
    id: {
      type: GraphQLID,
    },
    mov_id: {
      type: GraphQLInt,
    },
    act_name: {
      type: GraphQLString,
    },
  },
});

const authorType = new GraphQLObjectType({
  name: "AuthorType",
  description: "Author on movie",
  fields: {
    id: {
      type: GraphQLID,
    },
    mov_id: {
      type: GraphQLInt,
    },
    aut_name: {
      type: GraphQLString,
    },
  },
});

const movieType = new GraphQLObjectType({
  name: "Movies",
  description: "A movies for learning",
  fields: {
    id: {
      type: GraphQLID,
      description: "The id movies",
    },
    title: {
      type: GraphQLString,
      description: "The title movies",
    },
    duration: {
      type: GraphQLInt,
      description: "Duration movies",
    },
    watched: {
      type: GraphQLBoolean,
      description: "The watched movies ",
    },
    actors: {
      type: new GraphQLList(actorType),
      description: "The actors movies ",
    },
    authors: {
      type: new GraphQLList(authorType),
      description: "The authors movies ",
    },
  },
});

module.exports = {
  actorType,
  authorType,
  movieType,
};
