var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");

const selectAll = async (req, res) => {
  var param = null;
  var format = { language: "sql", indent: "" };
  var query = mybatisMapper.getStatement("user", "allsearch", param, format);
  console.log(query);
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

const selectUser = async (req, res) => {
  var email = req.param("email");
  var param = {
    email: email,
  };
  var format = { language: "sql", indent: "" };
  var query = mybatisMapper.getStatement("user", "search", param, format);
  console.log(query);
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

const insertUser = async (req, res) => {
  const body = req.body;
  var param = {
    email: body.email,
    lastName: body.lastName,
    firstName: body.firstName,
    password: body.password,
    phone: body.phone,
    birthDay: body.birthDay,
    excerciseCheck: body.excerciseCheck,
  };
  var format = { language: "sql", indent: "" };
  var query = mybatisMapper.getStatement("user", "signup", param, format);
  console.log(query);
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

module.exports = {
  selectAll,
  selectUser,
  insertUser,
};
