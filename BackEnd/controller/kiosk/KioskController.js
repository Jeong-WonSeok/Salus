const KioskModel = require("../../model/kiosk/KioskModel");

const dailyData = KioskModel.DailyData;
const userId = KioskModel.searchuserId;
const rfidExcerciseData = KioskModel.rfidExcerciseData;
const calendarData = KioskModel.calendarData;
module.exports = {
  dailyData,
  userId,
  rfidExcerciseData,
  calendarData
};
