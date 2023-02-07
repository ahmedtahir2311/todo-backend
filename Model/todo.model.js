const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
