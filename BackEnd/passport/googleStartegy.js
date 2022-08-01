var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;
const UserController = require('../controller/user/UserController');

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//     console.log('check');
//     UserController.search({user});
//     done(null, user);
// });

module.exports = () => { 
    passport.use(new GoogleStrategy(
        {
            clientID      : process.env.GOOGLE_ID,
            clientSecret  : process.env.GOOGLE_SECRET,
            callbackURL   : process.env.GOOGLE_URL,
            passReqToCallback   : true
        }, function(request, accessToken, refreshToken, profile, done){
            console.log('profile: ', profile);
            var user = profile;

            done(null, user);
        }
    ));
}
