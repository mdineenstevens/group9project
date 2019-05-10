const express = require("express");
const router = express.Router();

// const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;
const quizzes = data.quizzes;

router.get("/", async (req, res) => {
    // res.send('Questions create Page');
    // res.json()
    res.render('mainpage/mainCreator',{
        title: "Creator Main Page",
        Creator_main_CSS: true
    });
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

router.get("/searchQuestion", async (req, res) => {
    // res.send('Questions create Page');
    res.render('Question/searchQues',{
        title: "SearchQuestion",
        Creator_search_CSS: true
    });
});

router.get("/startQuiz", async (req, res) => {
    // res.send('Questions create Page');
    res.render('Question/tryQuiz',{
        title: "StartQuiz",
        Creator_search_CSS: true
    });
});

router.get("/accountUpdate", async (req, res) => {
    // res.send('Questions create Page');
    res.render('mainpage/accountupdate',{
        title: "Account Update",
        HOMEPAGE_AU_CSS: true,
        identity: "Creator"
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


router.post("/takeQuiz", async (req, res) => {
    // const quizzeInfo = req.body;
    // let field = quizzeInfo.field;
    const quizzeInfo = {field: "computer"};
    let field = "computer";
    // let candidatesId = req.session.userId;
    let candidatesId = "5cd338ddfc94e897e7beeba2";

    let quizData;

    if(!quizzeInfo){
        res.status(400).json({ error: "You must provide Effective Input" }).end();
        return;
    }
    if(!field){
        res.status(400).json({ error: "You must provide a Field" }).end();
        return;
    }
    // console.log(quizzeInfo, field)

    try{
        console.log(candidatesId, field)
        quizData = await quizzes.genQuiz(candidatesId,field);
        console.log(quizData.Questions[0]);
        res.render("Quiz/takeQuiz", {
            Questions: quizData.Questions
        });

    }catch(e){
        console.log("Here we are")
      res.status(500).json({ error: e });
    }
    
    
});

// router.post("/takeQuiz/submit",checkLogin, async (req, res) => {
//     const answerInfo = req.body;
//     let quizId = answerInfo.quizId;
//     let Submission = answerInfo.Submission;
//     let quizData;

//     try{
//         quizData = await quizzes.grade(quizId,Submission);
//         res.json(quizData);
//     }catch(e){
//       res.status(500).json({ error: e });
//     }

// });

router.post("/accountUpdate", async (req, res) => {
    //get the Update infomation(name,OldPassword,NewPassword,identity) frome request
    const longinInfo = req.body;
    const name = longinInfo.name;
    const OldPassword = longinInfo.OldPassword;
    const NewPassword = longinInfo.NewPassword;

    let userdata;
    
     //check the  infomation  
    if(!longinInfo){
      res.status(400).json({ error: "You must provide Effective Input" }).end();
      return;
    }
    if(!name){
      res.status(400).json({ error: "You must provide a name" }).end();
      return;
    }
    if(!OldPassword){
      res.status(400).json({ error: "You must provide OldPassword" }).end();
      return;
    }
    if(!NewPassword){
      res.status(400).json({ error: "You must provide NewPassword" }).end();
      return;
    }
    if(!identity){
      res.status(400).json({ error: "You must provide a Identity" }).end();
      return;
    }
    
    try{
      if(identity == 'candidates')
      {
          userdata = await candidates.infoUpdate(req.session.userId,OldPassword,NewPassword);
          res.json(userdata);
      }else if(identity == 'creators'){
          userdata = await creators.infoUpdate(req.session.userId,OldPassword,NewPassword);
          res.json(userdata);
      }else{
          throw 'identity data error';
      } 
    }catch(e){
        res.status(500).json({ error: e });
    }
  
    res.send('Account Updata Page');
  });







module.exports = router;