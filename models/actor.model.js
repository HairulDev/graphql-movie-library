const sequelize = require("#config/database");
const { DataTypes } = require("sequelize");

const Actor = sequelize.define("actors", {
    mov_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    act_name: {
        type: DataTypes.STRING,
    },
});

module.exports = {
    Actor
};