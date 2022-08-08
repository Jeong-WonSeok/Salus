const mysql = require("mysql2");
const mybatisMapper = require("mybatis-mapper");
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
	  host: '127.0.0.1',
	  user: 'salus',
	  password: 'b110iot',
	  database: 'salus',
	  multipleStatements: true,
});

mybatisMapper.createMapper(["./sql/kiosk/kiosk.xml"]);
mybatisMapper.createMapper(["./sql/equip/equip.xml"]);
mybatisMapper.createMapper(["./sql/excercise/excercise.xml"]);
mybatisMapper.createMapper(["./sql/user/user.xml"]);

module.exports = conn;

