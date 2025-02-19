import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // function addStep() {
  //   setStep((s) => s + 1);
  // }
  // function removeStep() {
  //   if (step > 1) setStep((s) => s - 1);
  // }
  function addCount() {
    setCount((c) => c + step);
  }
  function removeCount() {
    setCount((c) => c - step);
  }
  function reset() {
    setStep(1);
    setCount(0);
  }
  return (
    <>
      <div>
        <input
          type="range"
          value={step}
          min={0}
          max={10}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={removeCount}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={addCount}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={reset}>RESET</button>
        </div>
      ) : null}
    </>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
