const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
    try {
        questionDet = req.body;
        const result = await questionService.createQuestion(questionDet);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'failed to create question' });
    }
};

exports.getExam = async (req, res) => {
    try {
        const result = await questionService.getExam();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'failed to get exam' });
    }
}