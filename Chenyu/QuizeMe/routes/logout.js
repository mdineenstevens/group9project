const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
        //clean the session to logout
        req.session.user = null;
        req.session.identity = null;
        res.json(req.session);
});


module.exports = router;