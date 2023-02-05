const sequelize = require("#config/database");

const { DataTypes } = require("sequelize");

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

const Actor = sequelize.define("actors", {
  mov_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  act_name: {
    type: DataTypes.STRING,
  },
});

const Author = sequelize.define("authors", {
  mov_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  aut_name: {
    type: DataTypes.STRING,
  },
});

// Movie.hasMany(Actor);
// Actor.belongsTo(Movie);
Movie.hasMany(Actor, {
  foreignKey: "mov_id",
});

Actor.belongsTo(Movie, {
  foreignKey: "mov_id",
});

module.exports = {
  Movie,
  Actor,
  Author,
};
