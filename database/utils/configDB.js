require('dotenv').config();

const dbName = 'campus-server';
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PWD;

module.exports = {
    dbName,
    dbUser,
    dbPwd
};