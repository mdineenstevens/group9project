const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

        req.session.user = undefined;

        res.redirect("/QuizMe");
});


module.exports = router;