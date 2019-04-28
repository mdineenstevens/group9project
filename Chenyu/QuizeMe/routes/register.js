const express = require("express");
const router = express.Router();

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;

router.get("/", async (req, res) => {
    res.send('Register Page');
});

router.post("/", async (req, res) => {
    const RegisterInfo = req.body;
    const name = RegisterInfo.name;
    const password = RegisterInfo.password;
    const identity = RegisterInfo.identity;

    if(!RegisterInfo){
      res.status(400).json({ error: "You must provide Effective Input" }).end();
      return;
    }
    if(!name){
        res.status(400).json({ error: "You must provide a Name" }).end();
        return;
    }
    if(!password){
        res.status(400).json({ error: "You must provide a Password" }).end();
        return;
    }
    if(!identity){
        res.status(400).json({ error: "You must provide a Identity" }).end();
        return;
    }

    try{
          if(identity == 'candidates')
          {
              const newCandidate = await candidates.registar(name,password);
              res.json(newCandidate);
          }else if(identity == 'creators'){
              const newCreator = await creators.registar(name,password);
              res.json(newCreator);
          }else{
              throw 'identity data error';
          }
    }catch(e){
        res.status(500).json({ error: e });
    }
});


module.exports = router;