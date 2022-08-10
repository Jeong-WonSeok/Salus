const express = require('express');
const router = express.Router();

const equipmentRouter = require('./equipmentRouter.js');

router.use('/', equipmentRouter);

module.exports = router;