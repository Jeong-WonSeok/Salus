var express = require("express");
var router = express.Router();
var passport = require("../config/passport");

router.get("/login", function (req, res) {
  res.render("auth/login");
});

router.get("/logout", function (req, res, next) {
  req.logOut();
  req.session.destroy();
  res.redirect("/");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), authSuccess);

function authSuccess(req, res) {
  res.redirect("/");
}

module.exports = router;
