var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/daily/:userid", controller.dailyData);
router.get("/login/:rfidKey", controller.userId);
router.get("/excercise/:rfidKey/:equipmentId", controller.rfidExcerciseData);
router.get("/calendar/:userid", controller.calendarData);
module.exports = router;