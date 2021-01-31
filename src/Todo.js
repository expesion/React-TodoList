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
    <div className="Todo">
      <form className="Todo-edit-form" onSubmit={handleUpdate}>
        <input type="text" ref={updateTodo} defaultValue={task} />
        <button>Save</button>
      </form>
    </div>
  ) : (
    <div className="Todo">
      <li
        className={completed ? "Todo-task completed" : "Todo-task"}
        onClick={toggleCompletion}
      >
        {task}
      </li>
      <div className="Todo-buttons">
        <button onClick={() => setEditing(!editing)}>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={() => removeTodo(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
