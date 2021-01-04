import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      {/* removing data-test attributes */}
      <h1>App</h1>
      <h1 data-test="counter-display">
        The Counter is currently: <span data-test="count">{count}</span>
      </h1>
      {/* caso error seja true = visivel, caso contrário = className hidden (não há erro, a mensagem desaparece) */}

      <div data-test="alert" className={`error ${error ? "" : "hidden"}`}>
        The counter cannot go below 0
      </div>

      <button
        data-test="decrement-button"
        onClick={() => (count > 0 ? setCount(count - 1) : setError(true))}
      >
        decrement counter
      </button>

      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
    </div>
  );
}

export default App;
