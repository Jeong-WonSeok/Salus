var express = require("express");
var router = express.Router();
var passport = require('passport');

const controller = require("../controller/user/UserController");

router.post('/login', (req, res, next) => {

  passport.authenticate('local', (authError, user, info) => {
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      return res.redirect(`/?loginError=${info.message}`);
    }
    console.log(user);
    return user;
  })(req, res, next);
})
// router.get("/login", function (req, res) {

//   res.render("auth/login", {user : req.user});
// });

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
  console.log('test', test);
  // res.redirect("/user/search/" + email);
}

module.exports = router;
