require("dotenv").config();
const express = require("express");
const server = express();
const layout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const indexRouter = require("./controller/index");
const decodeIDToken = require("./config/auth");

// View engine
server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("layout", "layouts/layout");
server.use(layout);
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());
server.use(express.json());
server.use("/", indexRouter);

server.listen(process.env.PORT, () => {
    console.log("Connected");
});