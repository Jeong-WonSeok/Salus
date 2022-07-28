const mysql = require("mysql");
const mybatisMapper = require("mybatis-mapper");
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user : 'salus',
    password : 'b110iot',
    database : 'salus'
});
mybatisMapper.createMapper(['./sql/user/user.xml']);
mybatisMapper.createMapper(['./sql/equip/equip.xml']);
module.exports = conn;