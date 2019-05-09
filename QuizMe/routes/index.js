const logoutRoutes = require("./logout");
const accountUpdateRoutes = require("./accountUpdate");
const createQuestionsRoutes = require("./createQuestions");
const viewQuestionsRoutes = require("./viewQuestions");
const updateQuestionsRoutes = require("./updateQuestions");
const createQuizRoutes = require("./createQuiz");
const viewQuizzesRoutes = require("./viewQuizzes");
const gradeQuizRoutes = require("./gradeQuiz");

const HomeRoutes = require("./homepage");

const constructorMethod = app => {
    app.use("/logout", logoutRoutes);
    app.use("/accountUpdate", accountUpdateRoutes);
    app.use("/createQuestions", createQuestionsRoutes);
    app.use("/viewQuestions", viewQuestionsRoutes);
    app.use("/updateQuestions", updateQuestionsRoutes);
    app.use("/createQuiz", createQuizRoutes);
    app.use("/viewQuizzes", viewQuizzesRoutes);
    app.use("/gradeQuiz", gradeQuizRoutes);
  

    app.use("/QuizMe", HomeRoutes)

    app.use("*", (req, res) => {
      res.redirect('/QuizMe');
    });

    };
  
module.exports = constructorMethod;