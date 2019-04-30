const express = require("express");
const router = express.Router();

const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;

router.get("/",checkCreatorsLogin, async (req, res) => {
    res.send('Questions creat Page');
});

router.post("/",checkCreatorsLogin, async (req, res) => {
    //get the question infomation frome request
    const questionInfo = req.body;
    let creatorId = req.session.userId;
    let content = questionInfo.content;
    let answers = questionInfo.answers;
    let options = questionInfo.options;
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
        res.json(questionData);
    }catch(e){
      res.status(500).json({ error: e });
  }
    
});

module.exports = router;