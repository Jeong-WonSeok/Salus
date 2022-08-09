const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const rfidCheck = async (req, res) =>{
  const param = {
    rfidKey : req.params.rfidKey
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "rfidCheck",
    param,
    format
  );
  const result = await conn.promise().query(query);
  return result;
};

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
  } else return "뭐 없음";
};

//현재 운동 측정 값 받아오기
const excerciseData = async (req, res) => {
  // console.log(req.query)
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
    console.log('select', results);
    if (err) console.log(err);
    //만약 운동데이터가 없다면 새로 만들고 횟수 1 넣어줌
    else if (results.length === 0) {
      const query = mybatisMapper.getStatement(
        "dailyexcercise",
        "insertExcercise",
        param,
        format
      );
      conn.query(query, (err, results) => {
        if (err) console.log(err);
        // console.log(results);
        return res.json(results);
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
        console.log(results);
        return res.json(results);
      });
    }
  });
};

module.exports = {
  excerciseData,
  rfidCheck,
  updateIsStarted
};
