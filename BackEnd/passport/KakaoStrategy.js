const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

module.exports = ()=> {passport.use('kakao', new KakaoStrategy({
    clientID: "b2146d747eaa3fbae4adea0b135ae254",
    callbackURL: "https://localhost:3000/auth/kakao/callback",
},
async (accessToken, refreshToken, profile, done) => {
    console.log("dd");
    }))};