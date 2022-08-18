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
         // 유저가 있을 시 오늘 방문 했는지 체크 
	 const query2 = mybatisMapper.getStatement(
        "kiosk",
        "todayCheck",
        param,
        format
      );
      conn.query(query2, (err2, results2) => {
        if (err2) console.log(err2);
        if (results2.length === 0) {
        //  유저가 오늘 방문하지 않았을 경우에 입실 처리
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
        }
	// 유저가 방문 했고 입실을 했을 경우에는 퇴실 처리
	 else {
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
  });
};

const DailyData = async (req, res) => {
  var param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement("kiosk", "DailyData", param, format);
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
