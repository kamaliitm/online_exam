const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
    try {
        const result = await questionService.createQuestion();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'failed to create question' });
    }
};