const UserModel = require("../../model/user/UserModel")

const allSearch = UserModel.selectAll;

const search = UserModel.selectUser;

module.exports = {
    allSearch,
    search
};