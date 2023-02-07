var express = require("express");
var router = express.Router();

const TodoController = require("../controllers/todo.controller");

/* GET users listing. */
exports.init = () => {
  router
    .post("/tasks", TodoController.createTask)
    .get("/tasks", TodoController.getTasks);
  router
    .put("/tasks/:id", TodoController.updateTask)
    .get("/tasks/:id", TodoController.getTaskDetails)
    .delete("/tasks/:id", TodoController.deleteTask);

  this.app.use("/api", router);
};
