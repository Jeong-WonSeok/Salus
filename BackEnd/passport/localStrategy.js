const conn = require("../database/db");
const mybatisMapper = require("mybatis-mapper");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UserController = require('../controller/user/UserController');

module.exports = () => {
    // passport.use(new `LocalStrategy` ({
    //     usernameField: 'rfidKey',
    //     passwordfield: 'password',
    // }), 
    // async (rfidKey, password, done) => {
    //     console.log("test")
    //     const param = {
    //         rfidKey,
    //         password        
    //     }
    //     const format = { language: "sql", indent: ""};
    //     const query = mybatisMapper.getStatement("user", "login", param, format);
    //     conn.query(query, (err, results) => {
    //         console.log(results);
    //         if(err) done(err)
    //         if(password !== results.password){
    //             done(null, false, {message: '비밀번호가 일치하지 않습니다.' });
    //         }else if(results.length === 0){
    //             done(null, false, {message: '가입되지 않은 회원입니다.'}) ;
    //         }else {
    //             done(null, results);
    //         }
    //     })
    
    // });
};