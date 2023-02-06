
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
} = require("graphql");

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


module.exports = {
    authorType,
};