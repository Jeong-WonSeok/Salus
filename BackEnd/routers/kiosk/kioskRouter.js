var express = require("express");
var router = express.Router();

const controller = require("../../controller/kiosk/kioskController");
router.get("/daily/:rfidKey", controller.dailyData1);
router.get("/login/:rfidKey", controller.userInfo1);
module.exports = router;
