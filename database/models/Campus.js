const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://via.placeholder.com/150',
        validate: {
            isUrl: true,
        },
    },
});

module.exports = Campus;