const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;

router.get("/",checkLogin, async (req, res) => {
    res.send('Account Updata Page');
});

router.post("/",checkLogin, async (req, res) => {
  //get the Update infomation(name,OldPassword,NewPassword,identity) frome request
  const longinInfo = req.body;
  const name = longinInfo.name;
  const OldPassword = longinInfo.OldPassword;
  const NewPassword = longinInfo.NewPassword;
  const identity = longinInfo.identity;
  let userdata;
  
   //check the  infomation  
  if(!longinInfo){
    res.status(400).json({ error: "You must provide Effective Input" }).end();
    return;
  }
  if(!name){
    res.status(400).json({ error: "You must provide a name" }).end();
    return;
  }
  if(!OldPassword){
    res.status(400).json({ error: "You must provide OldPassword" }).end();
    return;
  }
  if(!NewPassword){
    res.status(400).json({ error: "You must provide NewPassword" }).end();
    return;
  }
  if(!identity){
    res.status(400).json({ error: "You must provide a Identity" }).end();
    return;
  }
  
  try{
    if(identity == 'candidates')
    {
        userdata = await candidates.infoUpdate(req.session.userId,OldPassword,NewPassword);
        res.json(userdata);
    }else if(identity == 'creators'){
        userdata = await creators.infoUpdate(req.session.userId,OldPassword,NewPassword);
        res.json(userdata);
    }else{
        throw 'identity data error';
    } 
  }catch(e){
      res.status(500).json({ error: e });
  }

  res.send('Account Updata Page');
});

module.exports = router;