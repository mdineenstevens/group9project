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

router.get("/accountUpdate", async (req, res) => {
    // res.send('Questions create Page');
    res.render('mainpage/accountupdate',{
        title: "Account Update",
        HOMEPAGE_AU_CSS: true,
        identity: "Candidate"
    });
});

router.get("/startQuiz", async (req, res) => {
    // res.send('Questions create Page');
    console.log(req.session.errors)
    let e = req.session.errors;
    req.session.errors = undefined;
    res.render('Question/tryQuiz',{
        title: "StartQuiz",
        Creator_search_CSS: true,
        error: e,
        canditade_type: true
    });
});

router.get("/QuizScore", async (req, res) => {
    // res.send('Questions create Page');
    req.session.quizData
    console.log(req.session.quizData)
    res.render('Quiz/QuizResult',{
        Name: req.session.quizData.quizName,
        Score: req.session.quizData.quizScore,
        Show_score: true,
        canditade_type: true
    });
});

router.get("/QuizHistory", async (req, res) => {
    // res.send('Questions create Page');
    let candidatesId = "5cd338ddfc94e897e7beeba2";
    let quizzesData;

    try{
        quizzesData = await quizzes.getAllQuiz(candidatesId);
        res.render("Quiz/QuizHistory",{
            history: quizzesData,
            Show_score: true,
            canditade_type: true
        });

    }catch(e){
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