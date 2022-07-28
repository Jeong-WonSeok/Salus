var expree = require('express');
var router = expree.Router();

// controller
const controller = require("../../controller/equipment/equipmentController");
router.post("/regist", controller.regist);

module.exports = router;