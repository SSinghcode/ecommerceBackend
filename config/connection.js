require('dotenv').config();

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
 
);

module.exports = sequelize;

