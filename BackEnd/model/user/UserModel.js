const conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");
const bcrypt = require('bcrypt');

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

const loginUser = async (req, res) => {
  console.log(req);
  var param = {
    rfidKey: req.user.rfidKey,
    password: req.user.password,
  }
  const format = { language: "sql", indent: ""};
  const query = mybatisMapper.getStatement("user", "login", param, format);
  return await conn.promise().query(query)
}

const selectUser = async (req, res) => {
  var param = {
    // email: req.params.email,
    email: req.user.email,
  };
  var format = { language: "sql", indent: "" };
  var query = mybatisMapper.getStatement("user", "search", param, format);
  console.log(query);
  const result = await conn.query(query, (err, results) => {
    if (err) console.log(err);
    // console.log(results)
    if (results.length === 0) {
      console.log("업데이트");
      return res.json(results);
      // return res.redirect("/signup");
    } else {
      console.log("else");
      console.log(results);
      // return res.redirect("/");
      return  res.json(results);
    }
  });
  return result;
};

const selectSignin = async (req, res) => {
  const body = req.body;
  var param = {
    email: body.email,
    password: body.password,
  };
  var format = { language: "sql", indent: "" };
  var query = mybatisMapper.getStatement("user", "signin", param, format);
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
    name: body.name,
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
  selectSignin,
  loginUser
};
