const express = require("express");
const router = express.Router();

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;

router.get("/", async (req, res) => {
    console.log('Register Page');
    res.render('mainpage/homepage');
});

router.post("/", async (req, res) => {
    //get the register infomation(name,password,identity) frome request
    console.log("register POST SUCCESS")
    console.log(req.body)

    const RegisterInfo = req.body;
    const name = RegisterInfo.username;
    const password = RegisterInfo.password;
    const identity = RegisterInfo.userID;
    //check the register infomation
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
    if(password !== RegisterInfo.confirm_password){
        res.status(400).json({ error: "Please Comfirm Your Password."}).end();
        return;
    }

    //put the new user to database, return a json{}
    try{
        // console.log(identity)
          if(identity == 'candidate')
          {
              const newCandidate = await candidates.registar(name,password);
            //   res.json(newCandidate);
          }else if(identity == 'creator'){
              const newCreator = await creators.registar(name,password);
            //   res.json(nekwCreator);
          }else{
              throw 'identity data error';
          }
        //   res.redirect("/login")
          res.redirect("/register")
    }catch(e){
        res.status(500).json({ error: e });
    }
});


module.exports = router;