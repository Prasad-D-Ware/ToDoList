//http server using express
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
  }
  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todo = await todos.find({});
  res.json({
    todo,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong id",
    });
  }

  await todos.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
app.listen(3000);
