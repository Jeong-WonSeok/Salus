const express = require("express");
const router = express.Router();

/** 키오스크 관련 router */
const kiosk = require("./kiosk");

/** 운동 자동 기록 관련 router */
const excercise = require("./excercise");

/** 모바일 관련 router */
const mobile = require("./mobile");

router.use("/kiosk", kiosk);
router.use("/excercise", excercise);
router.use("/mobile", mobile);

module.exports = router;
