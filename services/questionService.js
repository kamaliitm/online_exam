const { createMcq, createDescriptionQuestion, getRandomElemsFromArr } = require('./helper');
const { QUESTION_TYPE_MCQ, NO_OF_QUESTIONS } = require('./constants');
const { Mcq, DescriptiveQuestion } = require('../models');

exports.createQuestion = async (questionDet, file) => {
    
    console.log("creation question method: ", questionDet);

    questionType = questionDet.questionType;
    if (!questionType || questionType.trim() == "") {
        return {
            "status": "error",
            "message": "questionType is required",
        };
    }

    questionType = questionType.trim();
    questionDet.updatedBy = questionDet.createdBy;

    try {

        let questionId = "";
        if (questionType == QUESTION_TYPE_MCQ) {
            const mcq = await createMcq(questionDet);
            questionId = mcq.id;
        } else {
            const descQuestion = await createDescriptionQuestion(questionDet, file);
            questionId = descQuestion.id;
        }
        
        return {
            "status": "success",
            "message": "question is saved",
            "data": {
                "questionId": questionId,
            },
        };

    } catch (err) {
        console.error("error: ", err);
        return {
            "status": "error",
            "message": "error creating the question",
        };
    }
};

exports.getExam = async (req) => {
    try {
        const mcqs = await Mcq.findAll();
        const chosenMcqs = getRandomElemsFromArr(mcqs, NO_OF_QUESTIONS);

        const descriptive = await DescriptiveQuestion.findAll();
        let chosendescriptive = getRandomElemsFromArr(descriptive, NO_OF_QUESTIONS);
        chosendescriptive = chosendescriptive.map(desc => {
            const descData = desc.get({ plain: true });  // Convert to plain object
            return {
                ...descData,
                imageUrl: descData.imageName ? `${req.protocol}://${req.get('host')}/uploads/${descData.id}/${descData.imageName}` : null,
            };
        });

        console.log("chosenDescriptive: ", chosendescriptive);

        return {
            "status": "success",
            "message": "exam questions retrieved",
            "data": {
                "mcqs": chosenMcqs,
                "descriptive": chosendescriptive,
            },
        };
    } catch (err) {
        console.error(err);
        return {
            "status": "error",
            "message": "error fetching questions for the exam",
            "data": null,
        };
    }
};

