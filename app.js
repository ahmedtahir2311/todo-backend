var express = require("express");
require("dotenv").config();

const { errorHandler } = require("./middleware/errorHandler");
const { connectToMongoDB } = require("./config/db/db");
connectToMongoDB();

var indexRouter = require("./routes/index");
var todoRouter = require("./routes/todo");

var app = express();

// connecting db

// view engine setup
indexRouter.app = app;
todoRouter.app = app;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

indexRouter.init();
todoRouter.init();

module.exports = app;
