const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("Student", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false,
        unique: true,
    },

    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0.0,
            max: 4.0,
        },
    },
});

module.exports = Student;
