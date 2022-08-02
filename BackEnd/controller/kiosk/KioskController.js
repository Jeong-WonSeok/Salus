const KioskModel = require("../../model/kiosk/KioskModel");

const dailyData = KioskModel.searchDailyData;
const userId = KioskModel.searchuserId;
const selectExcercise = KioskModel.selectExcercise;
module.exports = {
  dailyData,
  userId,
  selectExcercise
};
