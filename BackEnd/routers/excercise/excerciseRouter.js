const express = require("express");
const router = express.Router();

const controller = require("../../controller/excercise/ExcerciseController");

router.get("/search", controller.searchExcerciseData);

module.exports = router;
