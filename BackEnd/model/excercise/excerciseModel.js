const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const updateIsStarted = async (req, res) =>{
  console.log('equipmentName', req.params);
  const param = {
    equipmentName : req.params.equipmentName
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
	console.log('excerciseData', req);
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
  const result = await conn.promise().query(query);
    //만약 운동데이터가 없다면 새로 만들고 횟수 1 넣어줌
    if (result[0].length === 0) {
	 console.log('운동 데이터 추가', result[0]);  
      const query2 = mybatisMapper.getStatement(
        "dailyexcercise",
        "insertExcercise",
        param,
        format
      );
      const result2 = await conn.promise().query(query2);
      return result2[0];
    }
    //만약 운동데이터가 있다면 카운트 + 1
    else {
	console.log("운동 데이터 수정", result[0]);
      const query3 = mybatisMapper.getStatement(
        "dailyexcercise",
        "updateExcercise",
        param,
        format
      );
      const result3 = await conn.promise().query(query3);
	    return result3[0];
    }
};
// 모바일로 운동데이터 보냄
const mobileExcerciseData = async (req, res) => {
  
  const param = {
    weightNow: req.params.weightNow,
    equipmentName: req.params.equipmentName,
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: ""};
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "mobileExcerciseData",
    param,
    format
  );
  const result = await conn.promise().query(query);
  console.log(result[0]);
  return result[0];
  //return res.json(result[0]);
}

const excerciseNowData = async (req, res) =>{
	const param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "dailyexcercise",
    "excerciseNowData",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
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
  excerciseNowData
};
