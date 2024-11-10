const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/questions', questionController.createQuestion);
router.get('/exam', questionController.getExam);

module.exports = router;