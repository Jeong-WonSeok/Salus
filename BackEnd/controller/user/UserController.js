const UserModel = require("../../model/user/UserModel");

const allSearch = UserModel.selectAll;

const search = UserModel.selectUser;

const signup = UserModel.insertUser;
module.exports = {
  allSearch,
  search,
  signup,
};
