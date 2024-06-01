import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || !category) {
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      category: category,
    });

    setInput("");
    setCategory("");
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
      <div>
        <input
          type="radio"
          id="business"
          name="todo__category"
          value="business"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          checked={category === "business"}
        />
        <label htmlFor="business">Business</label>
        <input
          type="radio"
          id="personal"
          name="todo__category"
          value="personal"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          checked={category === "personal"}
        />
        <label htmlFor="personal">Personal</label>
      </div>
      <button className="todo__button">Add todo</button>
    </form>
  );
}

export default TodoForm;
