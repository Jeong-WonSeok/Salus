const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const passport = require("passport");
const session = require("express-session");
const passportConfig = require("./passport");
const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "/.env") });
const webSocket = require("./socket/socket");

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

// routers
app.use(cors());
app.use(routers);
app.use("/", require("./routers"));
app.use("/auth", require("./routers/auth"));

// swagger
const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// server run
<<<<<<< HEAD
app.listen(3010, () => {
  console.log("Salus Server started 3010");
});

=======
const server = app.listen(3000, () => {
  console.log("Salus Server started 3000");
});

webSocket(server);
>>>>>>> 623d7eafff2c9d06e65699d57583bfc18e148bf2
