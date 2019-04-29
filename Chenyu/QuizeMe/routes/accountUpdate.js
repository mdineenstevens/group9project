const express = require("express");
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

const data = require("../data");
const candidates = data.candidates;
const creators = data.creators;

router.get("/",checkLogin, async (req, res) => {
    res.send('Account Updata Page');
});

router.post("/",checkLogin, async (req, res) => {
    res.send('Account Updata Page');
});

module.exports = router;