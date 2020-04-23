import React, { useState } from "react";
import AnimalTableWrapper from "./table/AnimalTableWrapper";
import "./App.css";

function App() {
  const [filterVal, setFilterVal] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
          />
        </div>
        <AnimalTableWrapper />
      </header>
    </div>
  );
}

export default App;
