var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/dailyEx", controller.selectExcerciseData);

module.exports = router;
