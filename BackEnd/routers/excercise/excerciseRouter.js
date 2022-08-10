const express = require("express");
const router = express.Router();

const controller = require("../../controller/excercise/excerciseController");

router.get("/search/:excerciseDay/:weightNow/:equipmentName/:rfidKey", controller.searchExcerciseData);
module.exports = router;