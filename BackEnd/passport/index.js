const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStartegy');
const google = require('./googleStartegy');

module.exports = () => {
    passport.serializeUser((user,done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    })

    local();
    // kakao();
    google();
}


