var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/daily", controller.searchDailyData);
module.exports = router;
