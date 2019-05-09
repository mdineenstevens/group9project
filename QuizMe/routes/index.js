
// const accountUpdateRoutes = require("./accountUpdate");
// const createQuestionsRoutes = require("./createQuestions");
// const viewQuestionsRoutes = require("./viewQuestions");
// const updateQuestionsRoutes = require("./updateQuestions");
// const createQuizRoutes = require("./createQuiz");
// const viewQuizzesRoutes = require("./viewQuizzes");
// const gradeQuizRoutes = require("./gradeQuiz");

const HomeRoutes = require("./homepage");
const CreatorRoutes = require("./creator");

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

  app.use("/logout", logoutRoutes);

  app.use("*", (req, res) => {
    // res.redirect('/QuizMe');
    res.json("somgting wrong")
  });

};
  
module.exports = constructorMethod;