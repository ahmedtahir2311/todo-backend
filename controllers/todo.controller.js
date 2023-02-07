const asyncHandler = require("express-async-handler");

exports.getTasks = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ message: "success", data: {} });
});

exports.getTaskDetails = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  return res.status(200).json({ message: "Getting all Tasks", data: { id } });
});

exports.createTask = asyncHandler(async (req, res, next) => {
  const {} = req.body;
  return res.status(200).json({ message: "New Task Created", data: req.body });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const {} = req.body;
  return res
    .status(200)
    .json({ message: `Task ${id} Updated  `, data: { id, body: req.body } });
});

exports.deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  return res.status(200).json({ message: `Task ${id} Deleted `, data: id });
});
