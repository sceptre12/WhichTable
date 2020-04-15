import React from "react";
import logo from "./logo.svg";
import cars from "data/cars.json";
import animal from "data/animal.json";
import userStocks from "data/userstocks.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {JSON.stringify(cars)}
      </header>
    </div>
  );
}

export default App;
