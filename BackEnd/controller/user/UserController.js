const UserModel = require("../../model/user/UserModel");

const allSearch = UserModel.selectAll;

const search = UserModel.selectUser;

const signup = UserModel.insertUser;

const signin = UserModel.selectSignin;

const loginUser = UserModel.loginUser;

module.exports = {
  allSearch,
  search,
  signup,
  signin,
  loginUser,
};
