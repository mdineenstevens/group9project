const mongoCollections = require("./config/mongoCollections");
const questions = mongoCollections.questions;
const candidates = mongoCollections.candidates;
const creators = mongoCollections.creators;
const quizzes = mongoCollections.quizzes;
const Ques_func = require('./questions')
const { ObjectId } = require('mongodb');
const CHK = require('./dataCHK/checkers.js');

async function NewQuiz(id, field){

    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";

    const candidatesCollection = await candidates();
    const user1 = await candidatesCollection.findOne({ _id: newid });
    const creatorsCollection = await creators();
    const user2 = await creatorsCollection.findOne({ _id: newid });
    const user = user1||user2;

    if (user === null) throw "No user with this ID.";

    CHK.CHKstring(field);

    const quizzesCollection = await quizzes();
    //const postsCollection = await posts();
  
    let newId4Quiz = new ObjectId();
  
    let ANewQuiz = {
      _id: newId4Quiz,
      user: newid,
      quizName: field+"QUIZ",
      quizScore: ""
    };
  
    const insertInfo = await quizzesCollection.insertOne(ANewQuiz);
    if (insertInfo.insertedCount === 0) throw "Could not start a quiz.";

    return ANewQuiz;
}
// NewQuiz("5cb765e4291d400f38c1e08d","of").then(result => console.log(result));


async function genQuiz(id, field){

    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";

    const candidatesCollection = await candidates();
    const user1 = await candidatesCollection.findOne({ _id: newid });
    const creatorsCollection = await creators();
    const user2 = await creatorsCollection.findOne({ _id: newid });
    const user = user1||user2;

    if (user === null) throw "No user with this ID.";

    const questionsCollection = await questions();
    const AllQuestions = await questionsCollection.find({ }).toArray();

    let QwithField = [];
    let Newfield = new RegExp(field,'i');
    for(let i = 0; i < AllQuestions.length; i = i+1){
        let ques = AllQuestions[i];
        if(ques.content.match(Newfield)){
            QwithField.push(AllQuestions[i]);
        }
    }
    // console.log(QwithField)

    let outArr;
    if(QwithField.length <=5){
        outArr = CHK.RandomN(QwithField, QwithField.length);
    }else{
        outArr = CHK.RandomN(QwithField,5)
    }

    if(outArr.length === 0) throw `Sorry. No relating questions.`;

    let QUIZ = await NewQuiz(id, field);

    let NewOut = [];
    for(let i=0; i < outArr.length; i = i+1){
        let OneQ = {};
        OneQ._id = outArr[i]._id;
        OneQ.content = outArr[i].content;
        temp_arr = outArr[i].answers.concat(outArr[i].options);
        OneQ.option = CHK.RandomN(temp_arr, temp_arr.length)
        NewOut.push(OneQ)
        // console.log(OneQ.option)
    }

    return { Q_id: QUIZ._id,
             Questions: NewOut};
}
// genQuiz("5cc8b910b2e1ee4c3623599e"," ").then(result => console.log(result));
// console.log(null||"asdadsf")

async function getQuizById(QuizId){
    let newID = CHK.checkObjectId(QuizId);

    const quizzesCollection = await quizzes();
    const Quiz = await quizzesCollection.findOne({ _id: newID });

    if(Quiz === null) throw "No Question with this ID.";

    return Quiz
}
// getQuizById("5cb8a415006c6617de13d5c3").then(result => console.log(result));

async function getAllQuiz(id){
    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";

    const candidatesCollection = await candidates();
    const user1 = await candidatesCollection.findOne({ _id: newid });
    const creatorsCollection = await creators();
    const user2 = await creatorsCollection.findOne({ _id: newid });
    const user = user1||user2;

    if (user === null) throw "No user with this ID.";

    const quizzesCollection = await quizzes();
    const Allquizzes = await quizzesCollection.find({ user: newid }).toArray();

    return Allquizzes
}
// getAllQuiz("5cba70f151c1172420c07ea2").then(result => console.log(result));

async function grade(Quiz_id, Submission){

    let NQuiz_id = CHK.checkObjectId(Quiz_id);
    if (!NQuiz_id) throw "You must provide an id to search for";

    const quizzesCollection = await quizzes();
    const TheQuiz = await quizzesCollection.findOne({ _id: NQuiz_id });
    if (TheQuiz === null) throw "No such quiz start.";

    let point = 0;
    for(let feedback of Submission){
        let TheQues = await Ques_func.getById(feedback.QuesId);
        let TheAns = TheQues.answers;
        let flag_Ans = true;
        if(feedback.answer.length !== TheAns.length){
            flag_Ans = false;
        }else{
            for(let i = 0; i < TheAns.length; i = i+1){
                if(!feedback.answer.includes(TheAns[i])){
                    flag_Ans = false;
                }
            }
        }
        if(flag_Ans === true){
            point = point + 1;
        }
    }

    const updateResult = await quizzesCollection.findOneAndUpdate(
        { _id: NQuiz_id },
        { $set: {
            quizScore: `${point}/${Submission.length}`
        } },
        { returnOriginal: false }
    );
    if (!updateResult.ok) {
        throw `Mongo was unable to update the QUIZ: ${newid}`;
    }
    // up

    return await getQuizById(Quiz_id);
}
// let Quiz_id = "5cbbbe9fe31fa229b6308e46";
// let Submission = [
//     {QuesId: "5cbbbe76bd485729b2ee6da2", answer: ["12"]},
//     {QuesId: "5cbbbe800ce4ec29b375adac", answer: ["100", "12","123"]},
//     {QuesId: "5cbbbe9fe31fa229b6308e45", answer: ["100", "12","123"]}
// ];
// grade(Quiz_id, Submission).then(result => console.log(result));

module.exports = {
    genQuiz,
    grade,
    getAllQuiz
}