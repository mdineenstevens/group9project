const express = require("express");
const router = express.Router();

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;
router.get("/", async (req, res) => {
    res.send('Login Page')
});

router.post("/", async (req, res) => {
    //get the register infomation(name,password,identity) frome request
    const longinInfo = req.body;
    const name = longinInfo.name;
    const password = longinInfo.password;
    const identity = longinInfo.identity;
    let userdata;

     //check the register infomation  
    if(!longinInfo){
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
            userdata = await candidates.login(name,password);
        }else if(identity == 'creators'){
            userdata = await creators.login(name,password);
        }else{
            throw 'identity data error';
        }
       req.session.user = userdata.name;
       req.session.identity = identity;
       req.session.userId = userdata._id;
       console.log(req.session);
       res.json(req.session);

    }catch(e){
      res.status(500).json({ error: e });
  }
});

module.exports = router;