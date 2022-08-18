const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const updateIsStarted = async (req, res) =>{
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
  const result = await conn.promise().query(query);
    if (result[0].length === 0) {;  
      // 운동 시작한 기구가 DB 에 없을 때 카운트 +1 DB Insert 
	const query2 = mybatisMapper.getStatement(
        "dailyexcercise",
        "insertExcercise",
        param,
        format
      );
      const result2 = await conn.promise().query(query2);
      return result2[0];
    }
    // DB에 기록 된 운동이 있을 시에 카운트 +1 Update
    else {
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
  return result[0];
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
