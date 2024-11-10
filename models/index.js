const Sequelize = require('sequelize');
const sequelize = require('../store/database');
const Examiner = require('./examiner');
const Mcq = require('./mcq');
const DescriptiveQuestion = require('./descriptiveQuestion');

Examiner.hasMany(Mcq, { foreignKey: 'createdBy', as: 'CreatedMcqs' });
Examiner.hasMany(Mcq, { foreignKey: 'updatedBy', as: 'UpdatedMcqs' });

Examiner.hasMany(DescriptiveQuestion, { 
    foreignKey: 'createdBy', as: 'CreatedDescriptiveQuestions',
});
Examiner.hasMany(DescriptiveQuestion, { 
    foreignKey: 'updatedBy', as: 'UpdatedDescriptiveQuestions',
});

Mcq.belongsTo(Examiner, {foreignKey: 'createdBy', as: 'McqCreator'});
Mcq.belongsTo(Examiner, {foreignKey: 'updatedBy', as: 'McqUpdater'});

DescriptiveQuestion.belongsTo(Examiner, {
    foreignKey: 'createdBy', as: 'DescriptiveQuestionCreator',
});
DescriptiveQuestion.belongsTo(Examiner, {
    foreignKey: 'updatedBy', as: 'DescriptiveQuestionUpdater',
});

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const db = {
    sequelize,
    Sequelize,
    Examiner,
    Mcq,
    DescriptiveQuestion,
  };
  
  module.exports = db;