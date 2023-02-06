const sequelize = require("#config/database");
const { DataTypes } = require("sequelize");
const { Actor } = require("./actor.model");
const { Author } = require("./author.model");

const Movie = sequelize.define("movies", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    watched: {
        type: DataTypes.BOOLEAN,
    },
});

Movie.hasMany(Actor, { as: 'actors', foreignKey: 'mov_id', targetKey: 'id' });
Movie.hasMany(Author, { as: 'authors', foreignKey: 'mov_id', targetKey: 'id' });

module.exports = {
    Movie
};