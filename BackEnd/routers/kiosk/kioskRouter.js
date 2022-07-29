var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/kiosk/KioskController");
router.get("/daily", controller.searchDailyData);
router.get("/dailyTime", controller.searchCategoryData);

module.exports = router;
