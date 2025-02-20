import React, { useRef, useState } from "react";
import "./Task.module.scss";

function Text({ value }) {
  return <p className="output-text">{value}</p>;
}

function CustomInput() {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setText(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="input-container">
      <input ref={inputRef} type="text" onKeyPress={handleKeyPress} placeholder="Введите текст..." />
      <button onClick={handleButtonClick}>Фокус</button>
      <Text value={text} />
    </div>
  );
}

export default CustomInput;
