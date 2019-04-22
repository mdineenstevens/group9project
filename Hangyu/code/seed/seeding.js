const DBFunc = require("../data/index");
const CAND = DBFunc.candidates;
const CREATOR = DBFunc.creators;
const QUIZ = DBFunc.quizzes;
const QUES = DBFunc.questions;

async function main() {
    
const cand_1 = await CAND.registar("Hangyu Wang", "HangyuPassWord");
const cand_2 = await CAND.registar("Michael Dineen", "MichaelPassWord");
const cand_3 = await CAND.registar("Chenyu Tian", "ChenyuPassWord");
const cand_4 = await CAND.registar("Liam Nagel", "LiamPassWord");

const creator_1 = await CREATOR.registar("creator_1", "creator_1_password");
const creator_2 = await CREATOR.registar("creator_2", "creator_2_password");
const creator_3 = await CREATOR.registar("creator_3", "creator_3_password");
const creator_4 = await CREATOR.registar("creator_4", "creator_4_password");

QUES.createQuestion(creator_1._id, )


}

main();