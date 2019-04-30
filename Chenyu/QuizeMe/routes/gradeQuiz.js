const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const quizzes = data.quizzes;

router.post("/", async (req, res) => {
    const answerInfo = req.body;
    let quizId = RegisterInfo.quizId;
    let answer = answerInfo.answer;

    let gradeData;

    if(!answerInfo){
        res.status(400).json({ error: "You must provide Effective content" }).end();
        return;
    }
    if(!quizId){
        res.status(400).json({ error: "You must provide Effective quizId" }).end();
        return;
    }
    if(!answer){
        res.status(400).json({ error: "You must provide Effective answer" }).end();
        return;
    }

    if(!Array.isArray(answer)){
        let a1 = [];
        a1[0] = answer;
        answer = a1;
    }

    try{
        gradeData = await quizzes.grade(quizId,answer);
        res.json(gradeData);
    }catch(e){
      res.status(500).json({ error: e });
  }

});

module.exports = router;