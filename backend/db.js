//mongodb file

const mongoose = require("mongoose");

mongoose.connect("connection-url");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
