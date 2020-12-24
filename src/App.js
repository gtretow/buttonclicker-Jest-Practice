import React from "react";
import "./App.css";

function App() {
  return (
    <div data-test="component-app">
      {/* removing data-test attributes */}
      <h1>App</h1>
      <h1 data-test="counter-display">Counter is currently</h1>
      <button data-test="increment-button" />
    </div>
  );
}

export default App;
