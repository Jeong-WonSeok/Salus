const express = require("express");
const router = express.Router();

const excerciseRouter = require("./excerciseRouter")

router.use("/", excerciseRouter);

module.exports = router;