var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

//현재 운동 데이터 받아오기
const searchDailyEx = async (req, res) => {
  const excerciseDay = req.param("excerciseDay");
  const param = {
    excerciseDay: excerciseDay,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchDailyData",
    param,
    format
  );
  console.log(query);
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    return res.json(results);
  });
};

module.exports = {
  searchDailyEx,
};
