const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const accountUpdateRoutes = require("./accountUpdate");
const createQuestionsRoutes = require("./createQuestions");
const viewQuestionsRoutes = require("./viewQuestions");
const updateQuestionsRoutes = require("./updateQuestions");
const createQuizRoutes = require("./createQuiz");
const viewQuizzesRoutes = require("./viewQuizzes");
const gradeQuizRoutes = require("./gradeQuiz");

const constructorMethod = app => {
    app.use("/register", registerRoutes);
    app.use("/login", loginRoutes);
    app.use("/logout", logoutRoutes);
    app.use("/accountUpdate", accountUpdateRoutes);
    app.use("/createQuestions", createQuestionsRoutes);
    app.use("/viewQuestions", viewQuestionsRoutes);
    app.use("/updateQuestions", updateQuestionsRoutes);
    app.use("/createQuiz", createQuizRoutes);
    app.use("/viewQuizzes", viewQuizzesRoutes);
    app.use("/gradeQuiz", gradeQuizRoutes);
  
    // app.use("*", (req, res) => {
    //   res.render('mainpage/homepage');
    //   //res.sendStatus(404);
    // });
    app.get("/",(req, res) => {
        res.render('mainpage/homepage');
        //res.sendStatus(404);
      })
    };
  
module.exports = constructorMethod;