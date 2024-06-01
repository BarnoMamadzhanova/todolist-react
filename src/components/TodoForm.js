import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    //   category: category,
    // });

    setInput("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo__input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="radio"
        id="business"
        name="todo__category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <label for="business">Business</label>
      <input
        type="radio"
        id="personal"
        name="todo__category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <label for="personal">Personal</label>
      <button className="todo__button">Add todo</button>
    </form>
  );
}

export default TodoForm;
