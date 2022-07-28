const express = require("express");
const router = express.Router();

/** 유저 관련 router */
const user = require("./user");

router.get("/", function (req, res) {
  res.render("main", { user: req.user });
});
router.use("/user", user);

router.get("/signup", (req, res) => {
  res.render("signup", { email: req.user.email, name: req.user.displayName });
});

/** KAKAO 로그인 관련 router*/
const auth = require("./auth");
router.use("/auth", auth);

/** 헬스 기구 관련 router */
const equipment = require("./equipment");
router.use("/equip", equipment);

module.exports = router;
