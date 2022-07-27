const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const passportConfig = require("./passport");
const app = express();

// passPort
passportConfig(app);

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routers
app.use(routers);

// swagger

const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// server run
http.createServer(app).listen(3000, ()=>{
    console.log("Salus Server started 3000");
})
