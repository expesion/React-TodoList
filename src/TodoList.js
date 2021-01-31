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
  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List!</h1>
      <ul>
        {todos.map(({ task, id, completed }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            removeTodo={removeTodo}
            update={updateTodo}
            completed={completed}
            toggleCompletion={() => toggleCompletion(id)}
          />
        ))}
      </ul>
      <CreateTodo addTodo={setTodos} />
    </div>
  );
}

export default TodoList;
