module.exports = {
    //check login
    checkLogin: function checkLogin(req,res,next){
        if(!req.session.user){
           res.status(400).json({ error: "You need login" });
        }
        next();
     },

    checkCandidatesLogin: function checkCandidatesLogin(req,res,next){
       if(!req.session.user){
          res.status(400).json({ error: "You need login" });
       }else if(req.session.identity != 'candidates'){
          res.status(400).json({ error: "You are not login as a candidate" });
       }
       next();
    },

    checkCreatorsLogin: function checkCreatorsLogin(req,res,next){
        if(!req.session.user){
           res.status(400).json({ error: "You need login" });
        }else if(req.session.identity != 'creators'){
           res.status(400).json({ error: "You are not login as a creators" });
        }
        next();
     },

     checkNotLogin: function checkNotLogin(req,res,next){
        if(req.session.user){
           res.status(400).json({ error: "You are logged in" });
        }
        next();
     },
}