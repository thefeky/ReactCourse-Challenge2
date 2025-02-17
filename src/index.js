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
  const date = new Date(2027, 5, 21);

  function addStep() {
    setStep((s) => s + 1);
  }
  function removeStep() {
    if (step > 1) setStep((s) => s - 1);
  }
  function addCount() {
    setCount((c) => c + step);
  }
  function removeCount() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div>
        <button onClick={removeStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={removeCount}>-</button>
        <span>Count: {count}</span>
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
