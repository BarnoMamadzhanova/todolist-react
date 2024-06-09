import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const [category, setCategory] = useState(
    props.edit ? props.edit.category : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (props.edit) {
      setInput(props.edit.text);
      setCategory(props.edit.category);
    }
  }, [props.edit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input and category
    if (!input || /^\s*$/.test(input)) {
      return;
    }
    if (!category) {
      return;
    }

    props.onSubmit({
      id: props.edit ? props.edit.id : Date.now(),
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
        ref={inputRef}
      />
      <div className="todo__input__radiobox">
        <label
          htmlFor="business"
          className="todo__input__radiobox-item item--business"
        >
          Business
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
        </label>
        <label
          htmlFor="personal"
          className="todo__input__radiobox-item item--personal"
        >
          Personal
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
        </label>
      </div>
      <button className="todo__button" onClick={handleSubmit}>
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
