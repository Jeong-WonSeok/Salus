const mysql = require("mysql");
const mybatisMapper = require("mybatis-mapper");
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
  });


mybatisMapper.createMapper(["./sql/user/user.xml"]);
mybatisMapper.createMapper(["./sql/kiosk/kiosk.xml"]);

mybatisMapper.createMapper(["./sql/equip/equip.xml"]);
mybatisMapper.createMapper(["./sql/excercise/excercise.xml"]);

module.exports = conn;
