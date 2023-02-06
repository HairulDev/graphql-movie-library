
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
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


module.exports = {
    actorType,
};
