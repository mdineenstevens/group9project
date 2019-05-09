const express = require("express");
const router = express.Router();

// const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;

router.get("/", async (req, res) => {
    // res.send('Questions create Page');
    res.json()
});

////////////////////////////////relating to the creator to create a Question////////////////////////////
router.get("/createQuestion", async (req, res) => {
    // res.send('Questions create Page');
    res.render('Question/createQues',{
        title: "CreateQuestion",
        Creator_path_CSS: true
    });
});

router.get("/takeQuiz", async (req, res) => {
    // res.send('Questions create Page');
    res.render('Quiz/takeQuiz',{
        title: "Quiz Start",
        Creator_path_CSS: true
    });
});


router.post("/createQuestion", async (req, res) => {
    //get the question infomation frome request
    console.log(req.body)
    const questionInfo = req.body;
    // let creatorId = req.session.userId;
    let creatorId = "5cd338ddfc94e897e7beeba2";
    let content = questionInfo.Ques_content;
    let answers = [];
    let options = [];
    let op_arr = [questionInfo.op1, questionInfo.op2, questionInfo.op3, questionInfo.op4];
    let option_arr = [questionInfo.option1, questionInfo.option1, questionInfo.option1, questionInfo.option1];

    for(let i=0; i < op_arr.length; i = i+1){
        if(op_arr[i] === '1'){
            answers.push(option_arr[i])
        }else{
            options.push(option_arr[i])
        }
    }
    console.log(answers, options)

    // let answers = questionInfo.answers;
    // let options = questionInfo.options;
    let questionData;

    if(!content){
        res.status(400).json({ error: "You must provide Effective content" }).end();
        return;
      }
    if(!answers){
        res.status(400).json({ error: "You must provide Effective answers" }).end();
        return;
      }
    if(!options){
        res.status(400).json({ error: "You must provide Effective options" }).end();
        return;
      }

    if(!Array.isArray(answers)){
        let a1 = [];
        a1[0] = answers;
        answers = a1;
    }
    if(!Array.isArray(options)){
        let a2 = [];
        a2[0] = options;
        options = a2;
    }

    try{
        questionData = await questions.createQuestion(creatorId,content,answers,options);
        // res.json(questionData);
        res.send({ success: true })
    }catch(e){
      res.status(500).json({ error: e });
  }
    
});

module.exports = router;