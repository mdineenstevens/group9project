const express = require("express");
const router = express.Router();

// const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;
const quizzes = data.quizzes;

router.get("/", async (req, res) => {
    // res.send('Questions create Page');
    // res.json("candidate page")
    res.render('mainpage/mainCandidate',{
        title: "Candidate Main Page",
        Candidate_main_CSS: true
    });
});



router.post("/takeQuiz", async (req, res) => {
    const quizzeInfo = req.body;
    let field = quizzeInfo.field;
    // console.log(quizzeInfo)
    // const quizzeInfo = {field: "memory"};
    // let field = "memory";
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
            Questions: quizData.Questions,
            title: "startQuiz",
            Creator_path_CSS: true
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






module.exports = router;