var express = require("express");
var router = express.Router();
var passport = require('passport');
const controller = require("../controller/user/UserController");


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

async function authSuccess(req, res) {
  console.log("여기는 옴");
  var email = req.user.email;
  console.log('req', req.user);
  const test = await controller.search(req, res);
  
  // res.redirect("/user/search/" + email);
}

module.exports = router;
