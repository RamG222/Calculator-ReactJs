import { useRef, useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const firstNumber = useRef(null);
  const secondNumber = useRef(null);
  const operator = useRef(null);
  const answer = useRef(null);

  function handleClick(buttonValue) {
    setInput((pv) => pv + buttonValue);
  }

  function handleOperator(op) {
    if (firstNumber.current == null) {
      firstNumber.current = parseInt(input);
      setInput("");
      operator.current = op;
    } else {
      secondNumber.current = parseInt(input);
    }

    if (firstNumber.current != null && secondNumber.current != null) {
      if (operator.current == "+") {
        answer.current = firstNumber.current + secondNumber.current;
      } else if (operator.current == "-") {
        answer.current = firstNumber.current - secondNumber.current;
      } else if (operator.current == "*") {
        answer.current = firstNumber.current * secondNumber.current;
      } else if (operator.current == "/") {
        answer.current = firstNumber.current / secondNumber.current;
      }
      setInput(answer.current);
      firstNumber.current = null;
      secondNumber.current = null;
      operator.current = null;
      answer.current = null;
    }
  }

  return (
    <>
      <h1>Calculator</h1>
      <div>
        <h2 className="display">{input}</h2>
      </div>
      <div className="button-container">
        <button className="number" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleClick("3")}>
          3
        </button>
        <br />
        <button className="number" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleClick("6")}>
          6
        </button>
        <br />
        <button className="number" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleClick("9")}>
          9
        </button>
        <br />
        <button className="number" onClick={() => handleClick("0")}>
          0
        </button>
        <br />
        <button className="operator" onClick={() => handleOperator("+")}>
          +
        </button>
        <button className="operator" onClick={() => handleOperator("-")}>
          -
        </button>
        <button className="operator" onClick={() => handleOperator("*")}>
          *
        </button>
        <button className="operator" onClick={() => handleOperator("/")}>
          /
        </button>

        <button className="operator equal" onClick={() => handleOperator("=")}>
          =
        </button>
      </div>
    </>
  );
}
export default App;
