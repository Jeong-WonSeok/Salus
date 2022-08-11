var express = require("express");
var router = express.Router();

// controller
const controller = require("../../controller/mobile/mobileController");
router.get("/login/:rfidKey/:password", controller.mobileLoginData);
router.get("/user/:rfidKey", controller.mobileUserData);
router.get("/calendar/:rfidKey/:searchDay", controller.mobileCalendarData);
router.get("/calendarDetail/:rfidKey/:searchDay", controller.mobileCalendarDetailData);
router.post("/updateTime/:rfidKey/:targetTime" ,controller.mobileUserTargetTime);
router.post("/updateVolume/:rfidKey/:targetVolume", controller.mobileUserTargetVolume);
module.exports = router;
