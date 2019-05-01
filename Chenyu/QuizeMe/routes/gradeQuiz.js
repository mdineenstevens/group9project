const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const quizzes = data.quizzes;

router.post("/",checkLogin, async (req, res) => {
    const answerInfo = req.body;
    let quizId = answerInfo.quizId;
    let Submission = answerInfo.Submission;
    let quizData;

    try{
        quizData = await quizzes.grade(quizId,Submission);
        res.json(quizData);
    }catch(e){
      res.status(500).json({ error: e });
    }

});

module.exports = router;