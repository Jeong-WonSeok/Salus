var express = require("express");
var router = express.Router();

// controller
const controller = require("../../controller/mobile/mobileController");
router.post("/login", controller.mobileLoginData);
router.get("/user/:rfidKey", controller.mobileUserData);
router.get("/calendar/:rfidKey/:searchDay", controller.mobileCalendarData);
router.get("/calendarDetail/:rfidKey/:searchDay", controller.mobileCalendarDetailData);
router.post("/updateTime" ,controller.mobileUserTargetTime);
router.post("/updateVolume", controller.mobileUserTargetVolume);
module.exports = router;
