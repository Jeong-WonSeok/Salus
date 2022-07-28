const UserModel = require("../../model/user/UserModel");

const allSearch = UserModel.selectAll;

const search = UserModel.selectUser;

const signup = UserModel.insertUser;

const signin = UserModel.selectSignin;
module.exports = {
<<<<<<< HEAD
  allSearch,
  search,
  signup,
};
=======
    allSearch,
    search,
    signup,
    signin
};
>>>>>>> f06620a5e3688af7d14461f49c94c0972c47c0eb
