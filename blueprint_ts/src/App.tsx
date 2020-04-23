import React, { useState } from "react";
import { ANIMALS, CARS, USER_STOCKS } from "data/dist/types/dataTypeEnums";

// Components
import AnimalTableWrapper from "./table/AnimalTableWrapper";
import CarTableWrapper from "./table/CarTableWrapper";

import "./App.css";

function App() {
  const [filterVal, setFilterVal] = useState("");
  const [selectedData, setSelectedData] = useState(ANIMALS);

  const renderDataTable = () => {
    switch (selectedData) {
      case ANIMALS:
        return <AnimalTableWrapper filterInfo={filterVal} />;
      case CARS:
        return <CarTableWrapper filterInfo={filterVal} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
          />
          <select
            id="dataSelect"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
          >
            <option value={ANIMALS}>{ANIMALS}</option>
            <option value={CARS}>{CARS}</option>
            <option value={USER_STOCKS}>{USER_STOCKS}</option>
          </select>
        </div>
        {renderDataTable()}
      </header>
    </div>
  );
}

export default App;
