var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID      : '791700548025-85n8gi7lve29lgag3upfojhkb1pji07j.apps.googleusercontent.com',
        clientSecret  : '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',
        callbackURL   : '/auth/google/callback',
        passReqToCallback   : true
    }, function(request, accessToken, refreshToken, profile, done){
        console.log('profile: ', profile);
        var user = profile;

        done(null, user);
    }
));

module.exports = passport;