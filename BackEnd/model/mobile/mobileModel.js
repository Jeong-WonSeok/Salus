var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const mobileLogin = async (req, res) => {
    console.log('body',req.body);
    var param = {
      rfidKey: req.body.rfidKey,
      email: req.body.email
    };
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "login", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
	if (results.length != 0){
            return res.json(results[0]);
	} else{
		var error ={
			rfidKey: "failed"
		}
	    return res.json(error);
	}
      });
}

const mobileData = async(req, res) =>{
    var param = {
        rfidKey : req.params.rfidKey,
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "mobileData", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
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
        return res.json(results);
      });
}

const targetTime = async(req, res)=>{
    var param = {
        rfidKey : req.body.rfidKey,
        targetTime : req.body.targetTime
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "targetTime", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
	    console.log("성공");
	    return res.json(results);
      });
}

const targetVolume = async(req, res)=>{
    var param = {
        rfidKey : req.body.rfidKey,
        targetVolume : req.body.targetVolume
    }
    const format = { language: "sql", indent: "" };
    const query = mybatisMapper.getStatement("mobile", "targetVolume", param, format);
    conn.query(query, (err, results) => {
        if (err) console.log(err);
	    console.log("성공");
	    return res.json(results);
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
