var expree = require("express");
var router = expree.Router();

// controller
const controller = require("../../controller/user/UserController");
router.get("/allsearch", controller.allSearch);
<<<<<<< HEAD
router.get("/search/", controller.search);
router.post("/signup", controller.signup);
=======
router.get("/search/:email", controller.search);
router.post("/signup", controller.signup);
router.get("/signin", controller.signin);
>>>>>>> f06620a5e3688af7d14461f49c94c0972c47c0eb
module.exports = router;
