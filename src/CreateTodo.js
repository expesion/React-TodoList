import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function CreateTodo({ addTodo }) {
  const [task, setTask] = useState({ task: "", id: "", completed: false });
  const handSubmit = (e) => {
    e.preventDefault();
    addTodo((t) => {
      return [...t, { ...task, id: uuid(), completed: false }];
    });
    setTask({ task: "" });
  };
  return (
    <form onSubmit={handSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        value={task.task}
        name="task"
        onChange={(e) => setTask({ task: e.target.value })}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default CreateTodo;
