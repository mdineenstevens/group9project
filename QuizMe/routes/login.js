const express = require("express");
const router = express.Router();

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;
router.get("/", async (req, res) => {
    console.log('Login Page');
    res.render('mainpage/homepage')
});

router.post("/", async (req, res) => {
    //get the register infomation(name,password,identity) frome request
    const loginInfo = req.body;
    const name = loginInfo.username;
    const password = loginInfo.password;
    const identity = loginInfo.userID;
    let userdata;

     //check the register infomation  
    if(!loginInfo){
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
        if(identity == 'candidate')
        {
            userdata = await candidates.login(name,password);
        }else if(identity == 'creator'){
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