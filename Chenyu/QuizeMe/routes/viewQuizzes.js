const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const quizzes = data.quizzes;

router.get("/", async (req, res) => {
    res.send('View all Quizzes Page');
});

router.post("/", async (req, res) => {
    let candidatesId = req.session.userId;
    let quizzesData;

    // if(!ViewInfo){
    //     res.status(400).json({ error: "You must provide Effective Input" }).end();
    //     return;
    //   }


    try{
        quizzesData = await quizzes.getAllQuiz(candidatesId);
        res.json(quizzesData);
    }catch(e){
      res.status(500).json({ error: e });
  }
});


module.exports = router;