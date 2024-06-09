import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const handleEditChange = (e) => {
    setEdit({ ...edit, text: e.target.value });
  };

  const handleEditKeyPress = (e, todoId) => {
    if (e.key === "Enter") {
      updateTodo(todoId, edit.text);
      setEdit({ id: null, text: "" });
    }
  };

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="todo__titlebox">
        <FaRegCircle
          className="todo__icon"
          style={{
            color:
              todo.category === "business"
                ? "rgb(3, 120, 254)"
                : "rgb(246, 12, 242)",
          }}
          onClick={() => completeTodo(todo.id)}
        />
        <div key={todo.id} className="todo__titlebox__input-wrapper">
          {edit.id === todo.id ? (
            <input
              type="text"
              value={edit.text}
              onChange={handleEditChange}
              onKeyPress={(e) => handleEditKeyPress(e, todo.id)}
            />
          ) : (
            todo.text
          )}
        </div>
      </div>

      <div className="todo__iconbox">
        <TiEdit
          className="todo__icon"
          onClick={() => setEdit({ id: todo.id, text: todo.text })}
        />
        <RiCloseCircleLine
          className="todo__icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
}

export default Todo;
