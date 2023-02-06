const sequelize = require("#config/database");
const { DataTypes } = require("sequelize");

const Author = sequelize.define("authors", {
    mov_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    aut_name: {
        type: DataTypes.STRING,
    },
});

module.exports = {
    Author,
};
