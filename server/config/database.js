// database connection
const { Sequelize } = require('sequelize');

const db = new Sequelize('bugbuster', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;