const express = require("express");
const router = express.Router();

const controller = require("../../controller/excercise/excerciseController");

router.get("/search", controller.searchExcerciseData);

module.exports = router;
