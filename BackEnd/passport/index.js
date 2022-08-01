const passport = require('passport');
// const local = require('./localStrategy');
// const kakao = require('./kakaoStartegy');
const google = require('./googleStartegy');
const UserController = require('../controller/user/UserController');

module.exports = () => {
    passport.serializeUser((user,done) => {
        done(null, user.id);
    });

    passport.deserializeUser((user, done) => {
        user => done(null, user);
    })

    // local();
    // kakao();
    google();
}


