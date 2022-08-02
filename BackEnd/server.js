const http = require("http");
const dotenv = require('dotenv');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const passport = require("passport");
const session = require("express-session");
const passportConfig = require('./passport');


dotenv.config({path: path.join(__dirname, '/.env')});


// const { sequelize } = require('./mosdel');

const app = express();
passportConfig();


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(
  session({ secret: "MySecret", resave: false, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('데이터 베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// routers
app.use(routers);
app.use("/", require("./routers"));
app.use("/auth", require("./routers/auth"));

// swagger
const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// server run
app.listen(3010, () => {
  console.log("Salus Server started 3010");
});
