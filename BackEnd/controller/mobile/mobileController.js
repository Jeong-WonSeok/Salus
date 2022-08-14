const mobileModel = require("../../model/mobile/mobileModel");


const mobileLoginData = mobileModel.mobileLogin;
const mobileUserData = mobileModel.mobileData;
const mobileCalendarData = mobileModel.calendarData;
const mobileCalendarDetailData = mobileModel.calendarDetailData;
const mobileUserTargetTime = mobileModel.targetTime;
const mobileUserTargetVolume = mobileModel.targetVolume;
module.exports = {
    mobileLoginData,
    mobileUserData,
    mobileCalendarData,
    mobileCalendarDetailData,
    mobileUserTargetTime,
    mobileUserTargetVolume
};
