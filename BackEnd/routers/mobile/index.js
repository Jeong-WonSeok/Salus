const express = require("express");
const router = express.Router();

const mobileRouter = require("./mobileRouter");

router.use("/", mobileRouter);

module.exports = router;
