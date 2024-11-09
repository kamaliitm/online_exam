const { DataTypes } = require('sequelize');
const sequelize = require('../store/database');

const Examiner = sequelize.define('Examiner', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Examiner;