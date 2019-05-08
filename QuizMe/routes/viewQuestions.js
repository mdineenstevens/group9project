const express = require("express");
const router = express.Router();

const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const questions= data.questions;

router.get("/",checkCreatorsLogin,async (req, res) => {
    let creatorId = req.session.userId;
    let questionData;

    try{
        questionData = await questions.viewQuestions(creatorId);
        res.json(questionData);
    }catch(e){
      res.status(500).json({ error: e });
  }
});

router.post("/",checkCreatorsLogin,async (req, res) => {
    let creatorId = req.session.userId;
    const ViewInfo = req.body;
    const field = ViewInfo.field;
    let questionData;

    if(!ViewInfo){
        res.status(400).json({ error: "You must provide Effective Input" }).end();
        return;
      }
      if(!field){
          res.status(400).json({ error: "You must provide a field" }).end();
          return;
      }

    try{
        questionData = await questions.SearchByField(creatorId,field);
        res.json(questionData);
    }catch(e){
      res.status(500).json({ error: e });
  }
});


module.exports = router;