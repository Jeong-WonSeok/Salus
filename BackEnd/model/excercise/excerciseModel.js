const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const updateIsStarted = async (req, res) =>{
  const param = {
    equipmentId : req.params.equipmentId
  }
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "isStarted",
    param,
    format
  );
  const result = await conn.promise().query(query);
  if (result.length != 0){
    const query2 = mybatisMapper.getStatement(
      "dailyexcercise",
      "returnRasp",
      param,
      format
    );
    const result2 = await conn.promise().query(query2);
    return result2;
  }
};

//현재 운동 측정 값 받아오기
const excerciseData = async (req, res) => {
  const param = {
    excerciseDay: req.params.excerciseDay,
    weightNow: req.params.weightNow,
    equipmentName: req.params.equipmentName,
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "selectExcercise",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    //만약 운동데이터가 없다면 새로 만들고 횟수 1 넣어줌
    if (results.length === 0) {
      const query = mybatisMapper.getStatement(
        "dailyexcercise",
        "insertExcercise",
        param,
        format
      );
      conn.query(query, (err, results) => {
        if (err) console.log(err);
        return results;
      });
    }
    //만약 운동데이터가 있다면 카운트 + 1
    else {
      const query = mybatisMapper.getStatement(
        "dailyexcercise",
        "updateExcercise",
        param,
        format
      );
      conn.query(query, (err, results) => {
        if (err) console.log(err);
        return results;
      });
    }
  });

};
// 모바일로 운동데이터 보냄
const mobileExcerciseData = async (req, res) =>{
  const param = {
    weightNow: req.params.weightNow,
    equipmentName: req.params.equipmentName,
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "mobileExcerciseData",
    param,
    format
  );
  const result = await conn.promise().query(query);
  return res.json(result[0]);
}

const nowTest = async (req, res) =>{
  console.log("여기옴");
  const param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "nowtest",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log("여기옴2");
    var weightNow = results[0].weightNow;
    var equipmentName = results[0].equipmentName;
    var rfidKey = results[0].rfidKey;
    return res.redirect("/excercise/mobile/" + weightNow +"/" +equipmentName +"/" + rfidKey);
  });
}

module.exports = {
  excerciseData,
  updateIsStarted,
  mobileExcerciseData,
  nowTest
};
