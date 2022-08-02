const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

//현재 운동 측정 값 받아오기
const searchExcerciseData = async(req, res) => {
    const param = {
        excerciseDay : req.body.excerciseDay,
        weightNow : req.body.weightNow,
        equipmentNmae : req.body.equipmentNmae,
        userid : req.body.userid
    }
}