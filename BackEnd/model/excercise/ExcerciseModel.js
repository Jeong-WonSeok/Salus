const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

//현재 운동 측정 값 받아오기
const searchExcerciseData = async(req, res) => {
    // console.log(req.query)
    const param = {
        excerciseDay : req.query.excerciseDay,
        weightNow : req.query.weightNow,
        equipmentName : req.query.equipmentName,
        userid : req.query.userid
    }
    const format = {language: "sql", indent: ""};
    const query = mybatisMapper.getStatement("dailyexcercise","selectExcercise", param, format);
    conn.query(query, (err, results) => {
        // console.log('select', results);
        if(err) console.log(err);
        //만약 운동데이터가 없다면 새로 만들고 횟수 1 넣어줌
        else if(results.length === 0){
            const query = mybatisMapper.getStatement("dailyexcercise","insertExcercise", param, format );
            conn.query(query, (err, results) => {
                if(err) console.log(err);
                // console.log(results);
                return res.json(results);
            })
        }
        //만약 운동데이터가 있다면 카운트 + 1
        else{
            const query = mybatisMapper.getStatement("dailyexcercise","updateExcercise", param, format );
            conn.query(query, (err, results) => {
                if(err) console.log(err);
                console.log(results);
                return res.json(results);
            })
        }
    });
}

module.exports= {
    searchExcerciseData
}