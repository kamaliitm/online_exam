const { DataTypes } = require('sequelize');
const sequelize = require('../store/database');

const DescriptiveQuestion = sequelize.define('DescriptiveQuestion', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.TEXT,
    }
});

module.exports = DescriptiveQuestion;