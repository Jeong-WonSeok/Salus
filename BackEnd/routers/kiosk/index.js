const express = require("express");
const router = express.Router();

const kioskRouter = require("./kioskRouter");

router.use("/", kioskRouter);

module.exports = router;
