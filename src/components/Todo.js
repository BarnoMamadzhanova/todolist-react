import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div>
        <FaRegCircle
          className="category-icon"
          onClick={() => completeTodo(todo.id)}
        />
      </div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit
          className="edit-icon"
          onClick={() =>
            setEdit({ id: todo.id, name: todo.text, value: todo.category })
          }
        />
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
}

export default Todo;
