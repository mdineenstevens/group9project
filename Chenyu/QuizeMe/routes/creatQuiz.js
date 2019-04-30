const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const quizzes = data.quizzes;

router.get("/", async (req, res) => {
    res.send('Quiz Page');
});

router.post("/", async (req, res) => {
    const quizzeInfo = req.body;
    let field = RegisterInfo.field;
    let candidatesId = req.session.userId;

    let quizData;

    if(!quizzeInfo){
        res.status(400).json({ error: "You must provide Effective Input" }).end();
        return;
    }
    if(!field){
          res.status(400).json({ error: "You must provide a Field" }).end();
          return;
    }

    try{
        quizData = await quizzes.genQuiz(candidatesId,field);
        res.json(quizData);
    }catch(e){
      res.status(500).json({ error: e });
    }
    
    
});




module.exports = router;