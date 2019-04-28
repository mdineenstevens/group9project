const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");

const constructorMethod = app => {
    app.use("/register", registerRoutes);
    app.use("/login", loginRoutes);
    app.use("/logout", logoutRoutes);
  
    app.use("*", (req, res) => {
      res.sendStatus(404);
    });
  };
  
module.exports = constructorMethod;