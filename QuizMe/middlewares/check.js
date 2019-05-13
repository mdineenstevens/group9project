module.exports = {
    //check login
    checkLogin: function checkLogin(req,res,next){
        if(!req.session.user){
         res.redirect('/QuizMe');
         return;
        }
        next();
     },

    checkCandidatesLogin: function checkCandidatesLogin(req,res,next){
      if(!req.session.user){
         res.redirect('/QuizMe');
         return;
        }else if(req.session.user.identity === 'creator'){
         res.redirect('/QuizMeCreator')
         return
        }
       next();
    },

    checkCreatorsLogin: function checkCreatorsLogin(req,res,next){
      if(!req.session.user){
         res.redirect('/QuizMe');
         return;
        }else if(req.session.user.identity === 'candidate'){
         res.redirect('/QuizMeCandidate')
         return
        }
        next();
     },

     checkNotLogin: function checkNotLogin(req,res,next){
        if(req.session.user){
         if(req.session.user.identity === 'candidate'){
            res.redirect('/QuizMeCandidate')
            return
          }else if(req.session.user.identity === 'creator'){
            res.redirect('/QuizMeCreator')
            return
          }
        }
        next();
     },

     Logging: function Logging(req, res, next){
         console.log(`[${new Date().toUTCString()}]:${req.method} ${req.originalUrl}`);
         // console.log(req.session);
     
         next();
      }
}