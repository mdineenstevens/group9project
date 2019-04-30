const express = require("express");
const router = express.Router();

const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;

router.get("/",checkCreatorsLogin,async (req, res) => {
    res.send('Update Questions Page');
});

router.post("/",checkCreatorsLogin,async (req, res) => {
    //get the question infomation frome request
    const newQuestionInfo = req.body;
    let questionId = newQuestionInfo.questionId;
    let content = newQuestionInfo.content;
    let answers = newQuestionInfo.answers;
    let options = newQuestionInfo.options;
    let questionData;

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
        questionData = await questions.updateQuestion(questionId,content,answers,options);
        res.json(questionData);
    }catch(e){
      res.status(500).json({ error: e });
  }
});

router.delete("/",checkCreatorsLogin,async (req, res) => {
    const questionInfo = req.body;
    const questionId = questionInfo.questionId;
    let deleteInfo;

    if(!questionId){
      res.status(400).json({ error: "You must provide Effective questionId" }).end();
      return;
    }

  try{
      deleteInfo = await questions.deleteQuestion(questionId);
      res.json(deleteInfo);
  }catch(e){
    res.status(500).json({ error: e });
}

});


module.exports = router;