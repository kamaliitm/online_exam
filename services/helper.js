const { Mcq, DescriptiveQuestion } = require("../models");

exports.createMcq = async (questionDet) => {
    try {
        const mcq = await Mcq.create(questionDet);
        return mcq;
    } catch (err) {
        console.error(err);
        throw new Error('error creating the mcq');
    }
}

exports.createDescriptionQuestion = async (questionDet) => {
    try {
        const question = await DescriptiveQuestion.create(questionDet);
        return question;
    } catch (err) {
        console.error(err);
        throw new Error('error creating the descriptive question');
    }
}

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
}