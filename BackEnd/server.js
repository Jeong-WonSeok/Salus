const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const app = express();
var passport = require("passport");
var session = require("express-session");

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(
  session({ secret: "MySecret", resave: false, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

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

