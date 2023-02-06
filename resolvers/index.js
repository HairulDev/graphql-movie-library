const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { Movie, Actor, Author } = require("../models");
const { movieType, actorType, authorType } = require("../schema");

const queryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",

  fields: {
    movie: {
      type: movieType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of movies",
        },
      },
      resolve: async (_, args) => {
        const movie = await Movie.findByPk(args.id);
        return movie;
      },
    },
    movies: {
      type: new GraphQLList(movieType),
      resolve: async () => {
        const movies = await Movie.findAll(
          {
            include: [{
              model: Actor,
              as: 'actors'
            }, {
              model: Author,
              as: 'authors'
            }]
          }
        );
        return movies;
      },
    },
    actor: {
      type: actorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of actor",
        },
      },
      resolve: async (_, args) => {
        const actor = await Actor.findByPk(args.id);
        return actor;
      },
    },
    actors: {
      type: new GraphQLList(actorType),
      resolve: async () => {
        const actors = await Actor.findAll();
        return actors;
      },
    },
    author: {
      type: authorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of author",
        },
      },
      resolve: async (_, args) => {
        const author = await Author.findByPk(args.id);
        return author;
      },
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve: async () => {
        const authors = await Author.findAll();
        return authors;
      },
    },
  },
});

const mutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root Mutation type",

  fields: {
    createMovie: {
      type: movieType,
      args: {
        title: {
          type: GraphQLString,
        },
        duration: {
          type: GraphQLInt,
        },
        watched: {
          type: GraphQLBoolean,
        },
      },
      resolve: (_, args) => {
        return Movie.create(args);
      },
    },
    updateMovie: {
      type: movieType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        title: {
          type: GraphQLString,
        },
        duration: {
          type: GraphQLInt,
        },
        watched: {
          type: GraphQLBoolean,
        },
      },
      resolve: (_, args) => {
        return Movie.update(
          {
            title: args.title,
            duration: args.duration,
            watched: args.watched,
          },
          {
            where: {
              id: args.id,
            },
          }
        );
      },
    },
    deleteMovie: {
      type: movieType,
      description: "Delete a Movie",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        return Movie.destroy({
          where: {
            id: args.id,
          },
        });
      },
    },

    createActor: {
      type: actorType,
      description: "Create a new Actor",
      args: {
        mov_id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        act_name: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => {
        return Actor.create(args);
      },
    },
    updateActor: {
      type: actorType,
      description: "Update Actor",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        mov_id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        act_name: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => {
        return Actor.update(
          {
            mov_id: args.mov_id,
            act_name: args.act_name,
          },
          {
            where: {
              id: args.id,
            },
          }
        );
      },
    },
    deleteActor: {
      type: actorType,
      description: "Delete a Actor",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        return Actor.destroy({
          where: {
            id: args.id,
          },
        });
      },
    },

    createAuthor: {
      type: authorType,
      description: "Create a new Author",
      args: {
        mov_id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        aut_name: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => {
        return Author.create(args);
      },
    },
    updateAuthor: {
      type: authorType,
      description: "Update Author",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        mov_id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        aut_name: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => {
        return Author.update(
          {
            mov_id: args.mov_id,
            aut_name: args.aut_name,
          },
          {
            where: {
              id: args.id,
            },
          }
        );
      },
    },
    deleteAuthor: {
      type: authorType,
      description: "Delete a Author",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        return Author.destroy({
          where: {
            id: args.id,
          },
        });
      },
    },
  },
});

module.exports = {
  queryType,
  mutationType,
};
