var express = require("express");
var router = express.Router();

/* GET home page. */

exports.init = () => {
  router.get("/", function (req, res, next) {
    return res
      .status(200)
      .json({ message: "This application was made w/ love & coffee." });
  });
  this.app.use("", router);
};
