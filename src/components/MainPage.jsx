import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./TodoList";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || !todo.category || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
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
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
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

export default TodoList;
