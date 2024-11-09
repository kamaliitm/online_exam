const { DataTypes } = require('sequelize');
const sequelize = require('../store/database');

const Mcq = sequelize.define('Mcq', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionB: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Mcq;