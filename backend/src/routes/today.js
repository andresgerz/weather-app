const { Router } = require("express");
const router = Router();

const { createToday } = require("../controllers/today");

router.route("/")
    .get(createToday);

module.exports = router;    