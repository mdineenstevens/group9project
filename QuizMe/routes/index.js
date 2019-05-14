const HomeRoutes = require("./homepage");
const CreatorRoutes = require("./creator");
const CandidateRoutes = require("./candidate");

const logoutRoutes = require("./logout");

const constructorMethod = app => {

  app.use("/QuizMe", HomeRoutes)
  app.use("/QuizMeCreator", CreatorRoutes)
  app.use("/QuizMeCandidate", CandidateRoutes)

  app.use("/logout", logoutRoutes);

  app.use("*", (req, res) => {
    // res.redirect('/QuizMe');
    if(!req.session.user){
      res.redirect('/QuizMe')
    }else if(req.session.user.identity === 'candidate'){
      res.redirect('/QuizMeCandidate')
    }else if(req.session.user.identity === 'creator'){
      res.redirect('/QuizMeCreator')
    }

  });

};
  
module.exports = constructorMethod;