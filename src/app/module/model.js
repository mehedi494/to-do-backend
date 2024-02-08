const { Schema, model } = require("mongoose");
const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    isComplete: {
      type: String,
      default: "incomplete",
    },
    priority: {
      type: String,
      default: "medium",
    },
  },
  { timestamps: true }
);
module.exports.Task = model("task", taskSchema);
