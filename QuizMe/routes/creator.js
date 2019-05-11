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

// router.get("/takeQuiz", async (req, res) => {
//     // res.send('Questions create Page');
//     res.render('Quiz/takeQuiz',{
//         title: "Quiz Start",
//         Creator_path_CSS: true
//     });
// });

router.get("/searchQuestion", async (req, res) => {
    // res.send('Questions create Page');
    res.render('Question/searchQues',{
        title: "SearchQuestion",
        Creator_search_CSS: true
    });
});

router.get("/startQuiz", async (req, res) => {
    // res.send('Questions create Page');
    let e = req.session.errors;
    req.session.errors = undefined;
    res.render('Question/tryQuiz',{
        title: "StartQuiz",
        Creator_search_CSS: true,
        error: e,
        creator_type: true
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

router.get("/QuizScore", async (req, res) => {
    // res.send('Questions create Page');
    req.session.quizData
    res.render('Quiz/QuizResult',{
        title: "Quiz Result",
        Name: req.session.quizData.quizName,
        Score: req.session.quizData.quizScore,
        Show_score: true,
        creator_type: true
    });
});

router.get("/QuizHistory", async (req, res) => {
    // res.send('Questions create Page');
    let candidatesId = "5cd338ddfc94e897e7beeba2";
    let quizzesData;

    try{
        quizzesData = await quizzes.getAllQuiz(candidatesId);
        res.render("Quiz/QuizHistory",{
            title: "Quiz History",
            history: quizzesData,
            Show_score: true,
            creator_type: true
        });

    }catch(e){
      res.status(500).json({ error: e });
    }
});

router.get('/modifyQues/:id', async (req, res) => {
    // console.log(req.params.id)

    const Quesresult = await questions.getById(req.params.id)

    req.session.QuesModify = Quesresult;

    console.log(Quesresult)
    res.render("Question/modifyQues",{
        title: "Update Question",
        Ques: Quesresult,
        modify_question: true
    });

});

router.get('/deleteQues/:id', async (req, res) => {
    // console.log(req.params.id)

    const Quesresult = await questions.getById(req.params.id)

    req.session.Quesdelete = Quesresult;

    console.log(Quesresult)
    res.render("Question/deleteQues",{
        title: "Delete Question",
        Ques: Quesresult,
        modify_question: true
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
    let op_arr = questionInfo.op;
    let option_arr = questionInfo.option;

    console.log(option_arr[op_arr])
    answers.push(option_arr[op_arr])
    option_arr.splice(op_arr,op_arr);
    options = option_arr

    console.log(answers, options)

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


router.post("/SearchResult",async (req, res) => {
    // let creatorId = req.session.userId;
    let creatorId = "5cd338e2fc94e897e7beeba3"
    const ViewInfo = req.body;
    console.log(ViewInfo)
    const field = ViewInfo.field;
    let questionData;
    // /searchQuestion

    // if(!ViewInfo){
    //     res.status(400).json({ error: "You must provide Effective Input" }).end();
    //     return;
    //   }
    //   if(!field){
    //       res.status(400).json({ error: "You must provide a field" }).end();
    //       return;
    //   }

    try{
        questionData = await questions.SearchByField(creatorId,field);
        // res.json(questionData);
        console.log(questionData);
        res.render("Question/listQues",{
            title: "Question List",
            result: questionData,
            Show_score: true
        })
    }catch(e){
      res.status(500).json({ error: e });
  }
});

// /QuizMeCreator/modifyQues

router.post("/modifyQues", async (req, res) => {
    console.log(req.body)
    // return res.send(req.body);
    //get the question infomation frome request
    const newQuestionInfo = req.body;
    console.log(newQuestionInfo)
    let questionId = req.session.QuesModify._id;
    let content = newQuestionInfo.Ques_content;
    let answers = [];
    // // newQuestionInfo.op;
    let options = [];
    // newQuestionInfo.option;
    // let questionData;
    if(newQuestionInfo.op.length === 1){
        answers.push(newQuestionInfo.op)
    }else{
        answers = newQuestionInfo.op;
    }

    if(newQuestionInfo.option.length === 1){
        options.push(newQuestionInfo.option)
    }else{
        options = newQuestionInfo.option;
    }

    // req.session.QuesModify

    // let creatorId = "5cd338ddfc94e897e7beeba2";
    // let content = questionInfo.Ques_content;
    // let answers = [];
    // let options = [];
    // let op_arr = [questionInfo.op1, questionInfo.op2, questionInfo.op3, questionInfo.op4];
    // let option_arr = [questionInfo.option1, questionInfo.option1, questionInfo.option1, questionInfo.option1];


    if(!questionId){
        res.status(400).json({ error: "You must provide Effective questionId" }).end();
        return;
      }
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


        options = options.filter( function( el ) {
            return answers.indexOf( el ) < 0;
        } );

        questionData = await questions.updateQuestion(questionId,content,answers,options);
        console.log(questionData)
        // res.json(questionData);
        res.send({ success: true })
    }catch(e){
      res.status(500).json({ error: e });
  }
});

router.post("/deleteQues", async (req, res) => {
    const questionInfo = req.body;
    const questionId = questionInfo.questionId;
    let deleteInfo;

    console.log(req.session.Quesdelete._id)

    // if(!questionId){
    //   res.status(400).json({ error: "You must provide Effective questionId" }).end();
    //   return;
    // }

  try{
      deleteInfo = await questions.deleteQuestion(req.session.Quesdelete._id);
      res.send({ success: true })
    //   res.json(deleteInfo);
  }catch(e){
    res.status(500).json({ error: e });
}

});




module.exports = router;