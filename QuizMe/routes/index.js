
// const accountUpdateRoutes = require("./accountUpdate");
// const createQuestionsRoutes = require("./createQuestions");
// const viewQuestionsRoutes = require("./viewQuestions");
// const updateQuestionsRoutes = require("./updateQuestions");
// const createQuizRoutes = require("./createQuiz");
// const viewQuizzesRoutes = require("./viewQuizzes");
// const gradeQuizRoutes = require("./gradeQuiz");

const HomeRoutes = require("./homepage");
const CreatorRoutes = require("./creator");
const CandidateRoutes = require("./candidate");

const logoutRoutes = require("./logout");

const constructorMethod = app => {
  
  // app.use("/accountUpdate", accountUpdateRoutes);
  // app.use("/createQuestions", createQuestionsRoutes);
  // app.use("/viewQuestions", viewQuestionsRoutes);
  // app.use("/updateQuestions", updateQuestionsRoutes);
  // app.use("/createQuiz", createQuizRoutes);
  // app.use("/viewQuizzes", viewQuizzesRoutes);
  // app.use("/gradeQuiz", gradeQuizRoutes);


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