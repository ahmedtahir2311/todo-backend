const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    title: { type: String, required: [true, "Why no bacon?"] },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Todo = mongoose.model("todos", todoSchema);
