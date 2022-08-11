var conn = require("../../database/db");
const mybatisMapper = require('mybatis-mapper');

const insertEquipment = async(req, res)=>{
    conn.connect();
    const body = req.body;
    var param = {
        equipmentName : body.equipmentName,
        equipmentEnglishName : body.equipmentEnglishName,
        equipmentCategory : body.equipmentCategory,
        gymId : body.gymId,
        equipmentStimulate : body.equipmentStimulate,
        equipmentEnglishStimulate : body.equipmentEnglishStimulate,
        equipmentDescription : body.equipmentDescription
    }
    var format = {language : 'sql', indent: ''};
    var query = mybatisMapper.getStatement('equip', 'equipment', param, format);
    console.log(query);
    conn.query(query, (err, results)=>{
        if (err) console.log(err);
        console.log(results);
        return res.json(results);
    })
}
module.exports ={
    insertEquipment
}
