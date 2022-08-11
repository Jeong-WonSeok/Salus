var express = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
var router = express.Router();
var passport = require('passport');
const { auth } = require('./authMiddleware');
const cookieParser = require('cookie-parser');
// const controller = require("../controller/user/UserController");

const app = express();

app.use(cookieParser());

dotenv.config();

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
  passport.authenticate('local', {session: false} , (authError, user, info) => {

    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      console.log('check3')
      return res.redirect(`/?loginError=${info.message}`);
    }

    const acessToken = jwt.sign({
      type : 'JWT',
      rfidKey : user[0][0].rfidKey,
    }, process.env.JWT_KEY, {
      expiresIn: '15m',
      issuer: 'salus'
    });
    const refreshToken = jwt.sign(
      {}, process.env.JWT_KEY, {
        expiresIn: '14d',
        issuer: 'salus'
      });
    
    console.log('acess', acessToken);
    console.log('refresh', refreshToken);

    res.cookie('token', acessToken);
    res.cookie('refreshToken', refreshToken);
    return res.json({
      token : acessToken,
      refreshToken,
    })
  })(req, res, next);
})
// router.get("/login", function (req, res) {

//   res.render("auth/login", {user : req.user});
// });
router.get("/logout", (req, res) =>  {
  res.cookie('token', null, {maxAge: 0});
  res.cookie('refreshToken', null, {maxAge: 0});
  return res.json({
    logout: "완료"
  })
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
