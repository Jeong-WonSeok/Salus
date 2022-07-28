const express = require("express");
const router = express.Router();

/** 유저 관련 router */
const user = require("./user");

/** 키오스크 관련 router */
const kiosk = require("./kiosk");

router.get("/", function (req, res) {
  res.render("main", { user: req.user });
  console.log("user", req.user);
});


router.use("/user", user);
router.use("/kiosk", kiosk);

module.exports = router;
