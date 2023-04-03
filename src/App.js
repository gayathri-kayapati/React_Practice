import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const colors = ["red", "blue", "yellow"];
  const [color, setColor] = useState(colors[0]);
  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div className="App">
      <h1 style={{ color }}>Hello CodeSandbox</h1>
      {colors.map((color) => {
        return <button onClick={() => changeColor(color)}>{color}</button>;
      })}
    </div>
  );
}
