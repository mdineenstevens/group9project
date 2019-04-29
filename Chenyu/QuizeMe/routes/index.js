const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const accountUpdateRoutes = require("./accountUpdate");
const creatQuestionsRoutes = require("./creatQuestions");

const constructorMethod = app => {
    app.use("/register", registerRoutes);
    app.use("/login", loginRoutes);
    app.use("/logout", logoutRoutes);
    app.use("/accountUpdate", accountUpdateRoutes);
    app.use("/creatQuestions", creatQuestionsRoutes);
  
    app.use("*", (req, res) => {
      res.sendStatus(404);
    });
  };
  
module.exports = constructorMethod;