
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mobileController = require('../controller/mobile/mobileController');

module.exports = () => {
    passport.use(new LocalStrategy ({
        usernameField: 'email',
        passwordField: 'rfidKey',
    }, 
    async (email, rfidKey, done) => {
        try{
            const exUser = await mobileController.userLogin(
                { 
                    body : {
                        email : email,
                        rfidKey : rfidKey, 
                    }
                });
            console.log('exUser', exUser[0][0].rfidKey);
            console.log(rfidKey)
            if(exUser[0][0]){
                if(rfidKey == exUser[0][0].rfidKey){
                    console.log('test');
                    done(null, exUser);
                }else{
                    console.log('test2');
                    done(null, false, { message : '비밀번호가 일치하지 않습니다.' });
                }
            }else{
                console.log('test3');
                done(null, false, {message : '가입되지 않은 회원입니다.'});
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
                
        
    }));
};