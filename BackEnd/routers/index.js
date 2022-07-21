const express = require("express");
const router = express.Router();

/** 유저 관련 router */

const user = require('./user');

router.use('/user', user);

module.exports = router;