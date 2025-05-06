const Sequelize = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');

console.log('Starting database connection');

const db = new Sequelize(dbName, dbUser, dbPwd, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;