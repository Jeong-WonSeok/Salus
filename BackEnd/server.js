const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const app = express();
<<<<<<< HEAD
=======

>>>>>>> f06620a5e3688af7d14461f49c94c0972c47c0eb
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
app.listen(3000, () => {
  console.log("Salus Server started 3000");
});
