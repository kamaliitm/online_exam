const { Mcq, DescriptiveQuestion } = require("../models");
const { QUESTION_TYPE_MCQ } = require('./constants');


exports.createQuestion = async (questionDet) => {
    
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
            const descQuestion = await createDescriptionQuestion(questionDet);
            questionId = descQuestion;
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
}

createMcq = (questionDet) => {
    try {
        const mcq = Mcq.create(questionDet);
        return mcq;
    } catch (err) {
        console.error(err);
        throw new Error('error creating the mcq');
    }
}

createDescriptionQuestion = (questionDet) => {
    try {
        const question = DescriptiveQuestion.create(questionDet);
        return question;
    } catch (err) {
        console.error(err);
        throw new Error('error creating the descriptive question');
    }
}