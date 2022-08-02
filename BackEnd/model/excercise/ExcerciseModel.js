const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

//현재 운동 측정 값 받아오기
const searchExcerciseData = async(req, res) => {
    console.log(req.query)
    const param = {
        excerciseDay : req.query.excerciseDay,
        weightNow : req.query.weightNow,
        equipmentName : req.query.equipmentName,
        userid : req.query.userid
    }
    const format = {language: "sql", indent: ""};
    const query = mybatisMapper.getStatement("dailyexcercise","selectExcercise", param, format);
    conn.query(query, (err, results) => {
        if(err) console.log(err);
        console.log(results);
        return res.json(results);
    });
}

module.exports= {
    searchExcerciseData
}