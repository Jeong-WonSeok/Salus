const KioskModel = require("../../model/kiosk/KioskModel");

const dailyData = KioskModel.DailyData;
const userInfo = KioskModel.searchUser;
const searchEquipMonthData = KioskModel.equipmentMonthData;
module.exports = {
  dailyData,
  userInfo,
  searchEquipMonthData,
};
