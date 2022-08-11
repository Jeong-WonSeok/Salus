var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const mobileLogin = async (req, res) => {
    var param = {
      rfidKey: req.params.rfidKey,
      password: req.params.password
    };
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "login", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log(results[0]);
        if (results.length != 0){
            var rfidKey = results[0].rfidKey;
            return res.redirect("/mobile/user/" + rfidKey);
        }
      });
      return ;
}

const mobileData = async(req, res) =>{
    var param = {
        rfidKey : req.params.rfidKey,
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "mobileData", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        return res.json(results);
      });
}

const calendarData = async(req, res) =>{
    var param = {
        rfidKey : req.params.rfidKey,
        searchDay : req.params.searchDay
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "calendarData", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        return res.json(results);
      });
}

const calendarDetailData = async(req, res) =>{
    var param = {
        rfidKey : req.params.rfidKey,
        searchDay : req.params.searchDay
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "calendarDetailData", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        return res.json(results);
      });
}

const targetTime = async(req, res)=>{
    var param = {
        rfidKey : req.params.rfidKey,
        targetTime : req.params.targetTime
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "targetTime", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log("성공");
      });
}

const targetVolume = async(req, res)=>{
    var param = {
        rfidKey : req.params.rfidKey,
        targetVolume : req.params.targetVolume
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "targetVolume", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
        console.log("성공");
      });
}
module.exports = {
    mobileLogin,
    mobileData,
    calendarData,
    calendarDetailData,
    targetTime,
    targetVolume
  };