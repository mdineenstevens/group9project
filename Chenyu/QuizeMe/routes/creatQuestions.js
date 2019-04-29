const express = require("express");
const router = express.Router();

const checkCreatorsLogin = require('../middlewares/check').checkCreatorsLogin;

const data = require("../data");
const quizzes = data.questions;

router.get("/",checkCreatorsLogin, async (req, res) => {
    res.send('Account Updata Page');
});

router.post("/",checkCreatorsLogin, async (req, res) => {
    res.send('Account Updata Page');
});

module.exports = router;