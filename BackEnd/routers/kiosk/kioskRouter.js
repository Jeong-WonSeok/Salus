var express = require("express");
var router = express.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/daily", controller.searchDailyData);
module.exports = router;
