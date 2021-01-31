import React, { useState, useRef } from "react";
import "./Todo.css";

function Todo({ task, removeTodo, id, update, completed, toggleCompletion }) {
  let [editing, setEditing] = useState(false);
  let updateTodo = useRef();
  const handleUpdate = (e) => {
    e.preventDefault();
    update(id, updateTodo.current.value);
    setEditing(false);
  };
  return editing ? (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" ref={updateTodo} defaultValue={task} />
        <button>Save</button>
      </form>
    </div>
  ) : (
    <div>
      <button onClick={() => setEditing(!editing)}>Edit</button>
      <button onClick={() => removeTodo(id)}>X</button>
      <li className={completed && "completed"} onClick={toggleCompletion}>
        {task}
      </li>
    </div>
  );
}

export default Todo;
