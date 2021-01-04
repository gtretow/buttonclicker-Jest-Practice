import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app">
      {/* removing data-test attributes */}
      <h1>App</h1>
      <h1 data-test="counter-display">
        The Counter is currently: <span data-test="count">{count}</span>{" "}
      </h1>

     
      <button
      
        data-test="decrement-button"
        onClick={() => setCount(count > 0? count - 1 : 0 )}
      > decrement counter </button> 
      <button
      
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      > Increment counter </button> 
    </div>
  );
}

export default App;
