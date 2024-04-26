const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://prasadware:QTK1BMd6m4el3UH2@cluster0.0ikj5rw.mongodb.net/to-do-app"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
