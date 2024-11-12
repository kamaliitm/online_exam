const express = require('express');
const router = express.Router();
const { upload } = require('../store/objectStore/localFileSystem');
const questionController = require('../controllers/questionController');

router.post('/questions', upload.single('questionImage'), questionController.createQuestion);
router.get('/exam', questionController.getExam);

module.exports = router;