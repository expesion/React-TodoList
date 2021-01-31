import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState(() => []);
  const removeTodo = (id) => {
    setTodos((todo) => todo.filter((t) => t.id !== id));
  };
  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List!</h1>
      <ul>
        {todos.map(({ task, id }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            removeTodo={removeTodo}
            update={updateTodo}
          />
        ))}
      </ul>
      <CreateTodo addTodo={setTodos} />
    </div>
  );
}

export default TodoList;
