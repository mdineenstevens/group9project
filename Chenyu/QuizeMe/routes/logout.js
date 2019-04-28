const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
        req.session.user = null;
        res.json(req.session);
});


module.exports = router;