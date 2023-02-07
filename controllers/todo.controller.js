const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const { errorHandler } = require("../middleware/errorHandler");

const Todo = require("../model/todo.model");

exports.getTasks = asyncHandler(async (req, res, next) => {
  await Todo.find()
    .then((result) => {
      return res
        .status(200)
        .json({ message: "Getting tasks Success", data: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      throw new Error(error);
    });
});

exports.getTaskDetails = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await Todo.findOne({ id })
    .then((result) => {
      return res
        .status(200)
        .json({ message: "Getting Particular task sucees", data: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      throw new Error();
    });
});

exports.createTask = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  await Todo.create({
    id: new mongoose.Types.ObjectId(),
    title,
    description,
  })
    .then((result) => {
      return res.status(201).json({
        message: "Todo created successfully!",
        createdTodo: {
          id: result.id,
          title: result.title,
          description: result.description,
          request: {
            type: "GET",
            url: `http://localhost:3000/todos/${result._id}`,
          },
        },
      });
    })
    .catch((err) => {
      // console.log(err);
      // return next(new Error(err));

      return new Error("Surprize");
    });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { title, description } = req.body;

  await Todo.findOneAndUpdate({ id }, req.body)
    .then((result) => {
      return res.status(200).json({
        message: `Task ${id} Updated  `,
        data: { id, body: req.body },
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      throw new Error();
    });
});

exports.deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await Todo.findOneAndDelete({ id })
    .then((result) => {
      return res.status(200).json({ message: `Task Deleted `, data: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      throw new Error();
    });
});
