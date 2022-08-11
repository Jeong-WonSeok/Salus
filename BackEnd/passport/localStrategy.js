
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UserController = require('../controller/user/UserController');

module.exports = () => {
    passport.use(new LocalStrategy ({
        usernameField: 'rfidKey',
        passwordfield: 'password',
    }, 
    async (rfidKey, password, done) => {
        try{
            const exUser = await UserController.loginUser({ user : {
                rfidKey : rfidKey, 
                password : password
            }});
            console.log('exUser', exUser[0]);
            if(exUser){
                if(password === exUser[0][0].password){
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
        }catch (error) {
            console.error(error);
            done(error);
        }
                
        
    }));
};