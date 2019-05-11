const mongoCollections = require("./config/mongoCollections");
const questions = mongoCollections.questions;
const creators = mongoCollections.creators;
const { ObjectId } = require('mongodb');

const CHK = require('./dataCHK/checkers.js');

async function createQuestion(creator, content, answers, options){

    CHK.CHKstring(content);
    CHK.CHKarray(answers);
    CHK.CHKarray(options);

    if (!content) throw "Please provide a description for the question.";
    if (!answers) throw "There should be at least one answer.";
    if (!options) throw "There should be at least.";

    if((answers.length + options.length < 4) || (answers.length + options.length > 6)){
        throw `Please make sure that there are 4~6 options.`;
    }
    for(let i = 0; i < answers.length; i = i+1){
        CHK.CHKStrInfo(answers[i]);
    }
    for(let i = 0; i < options.length; i = i+1){
        CHK.CHKStrInfo(options[i]);
    }

    const questionsCollection = await questions();
    const creatorsCollection = await creators();

    let creatorID = CHK.checkObjectId(creator);

    const CreatorInfo = await creatorsCollection.findOne({ _id: creatorID });
    
    if(CreatorInfo === null){
        throw `There is no creator with ID(${authorID})`;
    }

    let newId = new ObjectId();
    let newQuestion = {
        _id: newId,
        creator: creatorID,
        content: content,
        answers: answers,
        options: options
    };

    const insertInfo = await questionsCollection.insertOne(newQuestion);
    if (insertInfo.insertedCount === 0) throw "Could not add this question.";

    return newQuestion;
}
//  createQuestion("5cba70f151c1172420c07ea6", "This is the description of the question",["100","123"],["13","14","15"]).then(result => console.log(result));

async function viewQuestions(creator){

    let creatorID = CHK.checkObjectId(creator);

    const creatorsCollection = await creators();

    const user = await creatorsCollection.findOne({ _id: creatorID });
    if (user === null) throw "No creator with this ID.";

    const questionsCollection = await questions();
    const AllQuestions = await questionsCollection.find({ creator: creatorID }).toArray();

    return AllQuestions
}
//  viewQuestions("5cb7b4d593636312f352d7f1").then(result => console.log(result));

async function getById(id){

    let newID = CHK.checkObjectId(id);

    const questionsCollection = await questions();
    const Question = await questionsCollection.findOne({ _id: newID });

    if(Question === null) throw "No Question with this ID.";

    return Question
}
//  getById("5cb7801f513eeb103d20053").then(result => console.log(result));

async function updateQuestion(id, NewContent, NewAnswers, NewOptions){
    CHK.CHKstring(NewContent);
    CHK.CHKarray(NewAnswers);
    CHK.CHKarray(NewOptions);

    let newID = CHK.checkObjectId(id);

    if (!NewContent) throw "Please provide a description for the question.";
    if (!NewAnswers) throw "There should be at least one answer.";
    if (!NewOptions) throw "There should be at least.";

    if((NewAnswers.length + NewOptions.length < 4) || (NewAnswers.length + NewOptions.length > 6)){
        throw `Please make sure that there are 4~6 options.`;
    }
    for(let i = 0; i < NewAnswers.length; i = i+1){
        CHK.CHKStrInfo(NewAnswers[i]);
    }
    for(let i = 0; i < NewOptions.length; i = i+1){
        CHK.CHKStrInfo(NewOptions[i]);
    }

    const questionsCollection = await questions();

    const updateResult = await questionsCollection.findOneAndUpdate(
        { _id: newID },
        { $set: {
            content: NewContent,
            answers: NewAnswers,
            options: NewOptions
        } },
        { returnOriginal: false }
    );
    if (!updateResult.ok) {
        throw `Mongo was unable to update the user: ${newid}`;
    }

    return await getById(id);
}
// updateQuestion("5cb77c88cb1d9a101ab836e6","This is a test",["12","100","123"],["13","14","15"]).then(result => console.log(result));

async function deleteQuestion(id){

    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";


    const questionsCollection = await questions();
    const ToDeleteInfo = await getById(newid);
    const deletionInfo = await questionsCollection.deleteOne({ _id: newid });

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete the animal with id of ${id}`;
    }

    return {
        deleted: true,
        data: ToDeleteInfo
    };
}
// deleteQuestion("5cb77c88cb1d9a101ab836e6").then(result => console.log(result));
async function SearchByField(creator, field){

    // CHK.CHKstring(field);
    if(!(typeof field === "string" || field === undefined)){
        throw `the field should be a string or no input`
      }
    if(!field){
        return await viewQuestions(creator);
    }
    let newfield = field;
    // if(newfield.replace(/\s/g, '').length === 0){
    //     throw `Please make sure your searching is valid.`;
    // }

    let AllQuestions = await viewQuestions(creator);
    let QwithField = [];
    let Newfield = new RegExp(field,'i');
    for(let i = 0; i < AllQuestions.length; i = i+1){
        let ques = AllQuestions[i];
        if(ques.content.match(Newfield)){
            QwithField.push(AllQuestions[i]);
        }
    }

    return QwithField;
}
// SearchByField("5cb76659473f420f3f8f9ec7","Of").then(result => console.log(result));

module.exports = {
    createQuestion,
    viewQuestions,
    getById,
    updateQuestion,
    deleteQuestion,
    SearchByField
}