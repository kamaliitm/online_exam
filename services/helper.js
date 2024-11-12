const { Mcq, DescriptiveQuestion } = require("../models");
const { saveFile } = require('../store/objectStore/localFileSystem');

exports.createMcq = async (questionDet) => {
    try {
        const mcq = await Mcq.create(questionDet);
        return mcq;
    } catch (err) {
        console.error(err);
        throw new Error('error creating the mcq');
    }
};

exports.createDescriptionQuestion = async (questionDet, file) => {
    try {

        if (file) {
            questionDet.imageName = file.originalname;
        }
        const question = await DescriptiveQuestion.create(questionDet);

        let questionImage = null;
        if (file) {
            questionImage = await saveFile(question.id, file);
            console.log("uploaded the image successfully!");
        }
        
        return question;

    } catch (err) {
        console.error(err);
        throw new Error('error creating the descriptive question');
    }
};

exports.getRandomElemsFromArr = (arr, limit) => {
    const n = arr.length;
    const chosenElems = [];
    for (let i = 0; i < limit; i++) {
        const randomIndex = Math.floor(Math.random() * (n-i-1)) + i;
        console.log("randomIndex: ", randomIndex);
        chosenElems.push(arr[randomIndex]);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }

    return chosenElems;
};