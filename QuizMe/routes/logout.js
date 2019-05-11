const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
        //clean the session to logout
        req.session.user = undefined;
        // res.json(req.session);
        res.redirect("/QuizMe");
});


module.exports = router;