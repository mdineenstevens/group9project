const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const configRoutes = require("./routes");

const app = express();

//Set static file directory
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser());
app.use(session({
  name: 'quizeme',
  secret: '12345',
  cookie: {maxAge:600000},
  resave:true,
  saveUninitialized:false,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Set routes
configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});