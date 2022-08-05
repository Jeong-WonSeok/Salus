const express = require("express");
const router = express.Router();

/** KAKAO 로그인 관련 router*/
const auth = require("./auth");
router.use("/auth", auth);

/** 유저 관련 router */
const user = require("./user");

/** 키오스크 관련 router */
const kiosk = require("./kiosk");

const excercise = require("./excercise");

router.get("/", function (req, res) {
  res.render('main', {user : req.user})
  // res.render("main", { user: req.user });
  console.log("user", req.user);
});


router.use("/user", user);
router.use("/kiosk", kiosk);
router.use("/excercise", excercise)
router.get("/", function (req, res) {
  res.render("main", { user: req.user });
});


router.get("/signup", (req, res) => {
  res.render("signup", { email: req.user.email, name: req.user.displayName });
});

/** 헬스 기구 관련 router */
const equipment = require("./equipment");
router.use("/equip", equipment);

module.exports = router;
