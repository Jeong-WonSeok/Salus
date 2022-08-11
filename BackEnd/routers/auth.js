var express = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
var router = express.Router();
var passport = require('passport');
const { auth } = require('./authMiddleware');

dotenv.config();

// const controller = require("../controller/user/UserController");

router.get('/payload', auth, (req,res) => {
  console.log(req.decoded);
  const rfidKey = req.decoded.rfidKey;

  return res.status(200).json({
    code:200,
    message: '토큰은 정상입니다.',
    data: {
      rfidKey : rfidKey,
    }
  })
})

// 로그인 & 토큰 발급
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      console.log('check3')
      return res.redirect(`/?loginError=${info.message}`);
    }

    const token = jwt.sign({
      type : 'JWT',
      rfidKey : user[0][0].rfidKey,
    }, process.env.JWT_KEY, {
      expiresIn: '15m',
      issuer: 'salus'
    });
    const refreshToken = jwt.sign({}, 
      process.env.JWT_KEY, {
        expiresIn: '14d',
        issuer: 'salus'
      });
    
    console.log(token);

    res.cookie('token', token, {maxAge:30 * 60 * 1000}).end();
    res.cookie('refreshToken', refreshToken);
    
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

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get("/google/callback", passport.authenticate("google"), authSuccess);

// async function authSuccess(req, res) {
//   console.log("여기는 옴");
//   var email = req.user.email;
//   console.log('req', req.user);
//   const test = await controller.search(req, res);
//   console.log('test', test);
//   // res.redirect("/user/search/" + email);
// }

module.exports = router;
