const mobileModel = require("../../model/mobile/mobileModel");

const userLogin = mobileModel.userLogin;
const mobileLoginData = mobileModel.mobileLogin;
const mobileUserData = mobileModel.mobileData;
const mobileCalendarData = mobileModel.calendarData;
const mobileCalendarDetailData = mobileModel.calendarDetailData;
const mobileUserTargetTime = mobileModel.targetTime;
const mobileUserTargetVolume = mobileModel.targetVolume;

module.exports = {
    userLogin,
    mobileLoginData,
    mobileUserData,
    mobileCalendarData,
    mobileCalendarDetailData,
    mobileUserTargetTime,
    mobileUserTargetVolume
};
