import React from "react";
import "./App.css";

function App() {
const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app">
      {/* removing data-test attributes */}
      <h1>App</h1>
      <h1 data-test="counter-display">
      The Counter is currently$nbsp; <span data-test="count">{count}</span> </h1>
      <button data-test="increment-button" />
    </div>
  );
}

export default App;
