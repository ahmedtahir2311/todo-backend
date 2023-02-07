var express = require("express");
var router = express.Router();

const TodoController = require("../controllers/todo.controller");

/* GET users listing. */
exports.init = () => {
  router.get("/tasks", TodoController.getTasks);
  router.get("/tasks/:id", TodoController.getTaskDetails);

  router.post("/tasks/add", TodoController.createTask);
  router.put("/tasks/edit/:id", TodoController.updateTask);
  router.delete("/tasks/delete/:id", TodoController.deleteTask);
  this.app.use("/api", router);
};
