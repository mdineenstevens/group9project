const express = require("express");
const router = express.Router();

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;

router.get("/", async (req, res) => {
    // console.log('Register Page');
    res.render('mainpage/homepage');
});

router.post("/register", async (req, res) => {
    // console.log('Register Page');
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
        //   res.redirect("/register")
        res.send({ success: true })
    }catch(e){
        res.status(500).json({ error: e });
    }
});

router.post("/login", async (req, res) => {
    // console.log('Register Page');
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
    // res.json(req.session);
    res.send({ success: true })

    }catch(e){
        res.status(500).json({ error: e });
    }
});

module.exports = router;