require("dotenv").config();
const express = require("express");
const server = express();
const layout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const indexRouter = require("./controller/index");

// View engine
server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("layout", "layouts/layout");
server.use(layout);
server.use(cookieParser());
server.use("/", indexRouter)

server.listen(process.env.PORT, () => {
    console.log("Connected");
});