const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/study-saturday');

module.exports = db;
