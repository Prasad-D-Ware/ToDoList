import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
        style={{
          margin: 10,
          padding: 10,
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        style={{
          margin: 10,
          padding: 10,
        }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a ToDo
      </button>
    </div>
  );
}
