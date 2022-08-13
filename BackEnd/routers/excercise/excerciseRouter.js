const express = require("express");
const router = express.Router();

const controller = require("../../controller/excercise/excerciseController");

router.get("/search/:excerciseDay/:weightNow/:equipmentName/:rfidKey", controller.searchExcerciseData);
router.get("/mobile/:weightNow/:equipmentName/:rfidKey", controller.mobileExcerciseData);
router.get("/now/:rfidKey", controller.testNow);
module.exports = router;
