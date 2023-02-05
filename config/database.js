"use strict";
const { Sequelize } = require("sequelize");

const { dbUser, dbPass, dbHost, dbPort, dbName } = require("#config/vars");
const DB_URL = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(DB_URL);
module.exports = sequelize;
