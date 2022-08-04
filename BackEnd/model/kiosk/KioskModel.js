var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const searchuserId = async (req, res) =>{
  var param = {
    rfidKey : req.params.rfidKey
  }
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchuserid",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    // return res.json(results);
    if(results.length === 0){
      return res.json(results);
    }else {
      const userid = results[0].userid;
      return res.redirect("/kiosk/daily/"+userid);
    }
  });
}

//오늘 운동 데이터 받아오기
const DailyData = async (req, res) => {
  var param =  {
    userid: req.params.userid
  }
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "DailyData",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

// RFID 운동 찍었을 때
const rfidExcerciseData = async (req, res) =>{
  var param = {
    rfidKey : req.params.rfidKey,
    equipmentId : req.params.equipmentId
  }
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchequip",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    var userid = results[0][0].userid;
    var equipmentName = results[1][0].equipmentName;
    var param = {
      equipmentName : equipmentName,
      userid : userid
    }
    const query = mybatisMapper.getStatement(
      "kiosk",
      "dailyexcerciseInsert",
      param,
      format
    );
    conn.query(query, (err, results) =>{
      console.log(results);
    });
  });
}

const calendarData = async (req, res) => {
  var param =  {
    userid: req.params.userid
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchCalendarDailyData",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

module.exports = {
  DailyData,
  searchuserId,
  rfidExcerciseData,
  calendarData
};
