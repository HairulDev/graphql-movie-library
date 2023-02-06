
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
} = require("graphql");
const { actorType } = require("./actor.schema");
const { authorType } = require("./author.schema");

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
    movieType,
};