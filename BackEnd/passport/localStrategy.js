const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../model/user/User');
const user = require('../model/user/User');

module.exports = () => {
    passport.use(new LocalStrategy ({
        usernameField: 'email',
        passwordfield: 'password',
    }), async(email, password, done) => {
    })
}