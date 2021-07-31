import React, { useCallback, useState } from "react";

const KEY_ENTER = "Enter";

export default function Form(props) {
  const { onValue, children } = props;

  const [value, setValue] = useState("");

  const clickHandler = useCallback(() => {
    onValue(value);
    setValue("");
  }, [onValue, value]);

  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === KEY_ENTER) {
        clickHandler();
      }
    },
    [clickHandler]
  );

  return (
    <div className="form">
      <input
        onKeyDown={keyDownHandler}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="todo-input"
      />

      <button onClick={clickHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      {children}
    </div>
  );
}
