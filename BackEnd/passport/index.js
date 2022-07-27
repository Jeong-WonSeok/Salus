const passport = require("passport");
const kakao = require('./KakaoStrategy');
module.exports = () =>{
    kakao();
};