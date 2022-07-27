var expree = require('express');
var router = expree.Router();
const passport = require('passport');

router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect:'/',
}), (res, req)=>{
    res.redirect('/');
})

module.exports = router;