const express = require('express');
const router = express.Router();

const equipmentRouter = require('./equipmentRouter');

router.use('/', equipmentRouter);

module.exports = router;