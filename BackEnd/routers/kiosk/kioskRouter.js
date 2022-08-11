var express = require("express");
var router = express.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/daily/:rfidKey", controller.dailyData);
router.get("/login/:rfidKey", controller.userInfo);
router.get("/equipdata/:equipmentName",controller.searchEquipMonthData);
module.exports = router;
