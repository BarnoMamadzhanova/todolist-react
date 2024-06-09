import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function MainPage() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const updateTodo = (todoId, newText) => {
    if (!newText || /^\s*$/.test(newText)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId ? { ...item, text: newText } : item
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const completeTodo = (id) => {
    let completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completedTodos);
  };

  return (
    <div className="main__content">
      <h1>Create a todo</h1>
      <TodoForm onSubmit={addTodo} />

      <div className="todo__container">
        <h1>Todo List</h1>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default MainPage;
