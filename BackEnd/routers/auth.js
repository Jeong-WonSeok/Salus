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
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google"),
  (authSuccess = (req, res) => {
    console.log("email", req.user.email);
    res.redirect("/");
  })
);

function authSuccess(req, res) {
  if (req.user.email == "jws4858@gmail.com") {
    res.redirect("/");
  } else {
    res.redirect("/info");
  }
}

module.exports = router;
