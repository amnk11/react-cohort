import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);

  const increase = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={increase} style={{ margin: "15px" }}>
          📈
        </button>
        <button onClick={decrement}>📉</button>
      </div>
    </>
  );
}

export default App;
