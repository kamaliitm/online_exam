const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
    try {
        const questionDet = req.body;
        const file = req.file;

        const result = await questionService.createQuestion(questionDet, file);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'failed to create question' });
    }
};

exports.getExam = async (req, res) => {
    try {
        const result = await questionService.getExam(req);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'failed to get exam' });
    }
}