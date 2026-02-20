import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    if (operator === "+") setResult(n1 + n2);
    else if (operator === "-") setResult(n1 - n2);
    else if (operator === "*") setResult(n1 * n2);
    else if (operator === "/") {
      if (n2 === 0) setResult("Cannot divide by zero");
      else setResult(n1 / n2);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => calculate("+")}>Add</button>
        <button onClick={() => calculate("-")} style={{ marginLeft: "10px" }}>
          Subtract
        </button>
        <button onClick={() => calculate("*")} style={{ marginLeft: "10px" }}>
          Multiply
        </button>
        <button onClick={() => calculate("/")} style={{ marginLeft: "10px" }}>
          Divide
        </button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        <strong>Result: </strong> {result}
      </div>
    </div>
  );
}

export default App;