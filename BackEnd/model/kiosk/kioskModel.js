var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");


const searchUser = async (req, res) => {
	var param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchuser",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    if (results.length === 0) {
      return results;
    } else {
      const query2 = mybatisMapper.getStatement(
        "kiosk",
        "todayCheck",
        param,
        format
      );
      conn.query(query2, (err2, results2) => {
        if (err2) console.log(err2);
        if (results2.length === 0) {
          const query3 = mybatisMapper.getStatement(
            "kiosk",
            "attendanceEntry",
            param,
            format
          );
          conn.query(query3, (err3, results3) => {
            if (err3) console.log(err3);
            const rfidKey = results[0].rfidKey;
            return res.redirect("/kiosk/daily/" + rfidKey);
          });
        } else if (results2[0].attendanceCheck === 1) {
          const query4 = mybatisMapper.getStatement(
            "kiosk",
            "attendanceExit",
            param,
            format
          );
          conn.query(query4, (err4, results4) => {
            if (err4) console.log(err4);
            const rfidKey = results[0].rfidKey;
            return res.redirect("/kiosk/daily/" + rfidKey);
          });
        }
      });
    }
    const rfidKey = results[0].rfidKey;
    return res.redirect("/kiosk/daily/" + rfidKey);
  });
};

//오늘 운동 데이터 받아오기
const DailyData = async (req, res) => {
  var param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement("kiosk", "DailyData", param, format);
  // let result = {};
  const result = await conn.promise().query(query);
  return res.json(result[0]);  

};

const todayCheck = async(req, res)=>{
  var param = {
    rfidKey : req.params.rfidKey
  }
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "todayCheck",
    param,
    format
  );
  const result = await conn.promise().query(query);
	return result[0][0];
}

module.exports = {
  DailyData,
  searchUser,
  todayCheck
};
