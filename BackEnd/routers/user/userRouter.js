var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/user/UserController");
router.get("/allsearch", controller.allSearch);
router.get("/search/", controller.search);
router.post("/signup", controller.signup);
module.exports = router;
