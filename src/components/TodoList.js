import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || !todo.category || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
