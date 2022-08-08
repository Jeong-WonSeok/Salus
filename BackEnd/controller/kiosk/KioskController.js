const KioskModel = require("../../model/kiosk/KioskModel");

const dailyData = KioskModel.DailyData;
const userInfo = KioskModel.searchUser;
const calendarData = KioskModel.calendarData;
const searchEquipMonthData = KioskModel.equipmentMonthData;
module.exports = {
  dailyData,
  userInfo,
  calendarData,
  searchEquipMonthData
};
