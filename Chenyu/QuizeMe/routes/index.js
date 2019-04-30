const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const accountUpdateRoutes = require("./accountUpdate");
const creatQuestionsRoutes = require("./creatQuestions");
const viewQuestionsRoutes = require("./viewQuestions");
const updateQuestionsRoutes = require("./updateQuestions");
const creatQuizRoutes = require("./creatQuiz");
const viewQuizzesRoutes = require("./viewQuizzes");
const gradeQuizRoutes = require("./gradeQuiz");

const constructorMethod = app => {
    app.use("/register", registerRoutes);
    app.use("/login", loginRoutes);
    app.use("/logout", logoutRoutes);
    app.use("/accountUpdate", accountUpdateRoutes);
    app.use("/creatQuestions", creatQuestionsRoutes);
    app.use("/viewQuestions", viewQuestionsRoutes);
    app.use("/updateQuestions", updateQuestionsRoutes);
    app.use("/creatQuiz", creatQuizRoutes);
    app.use("/viewQuizzes", viewQuizzesRoutes);
    app.use("/gradeQuiz", gradeQuizRoutes);
  
    app.use("*", (req, res) => {
      res.sendStatus(404);
    });
  };
  
module.exports = constructorMethod;