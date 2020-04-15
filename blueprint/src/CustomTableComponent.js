import React, { Component } from "react";
import { Column, Table } from "@blueprintjs/table";
import cars from "data/cars.json";
import animal from "data/animal.json";
import userStocks from "data/userstocks.json";
import { USER_STOCKS, ANIMALS, CARS } from "data/dataTypes";

class TableWrapper extends Component {
  constructor(props) {
    super(props);

    const uStocks = this.stateDataFormat(userStocks);

    this.state = {
      [ANIMALS]: this.stateDataFormat(animal),
      [CARS]: this.stateDataFormat(cars),
      [USER_STOCKS]: uStocks,
      currentSelected: [USER_STOCKS],
      selectedData: {
        dataCount: Object.keys(uStocks).length, // Ignore the redundancy
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSelected !== this.state.currentSelected) {
      this.setState((state) => ({
        ...state,
        selectedData: {
          dataCount: Object.keys(state[state.currentSelected]).length,
        },
      }));
    }
  }

  stateDataFormat = (data) =>
    data.reduce(
      (newFormat, current) => ({
        ...newFormat,
        [current.uuid]: {
          ...current,
        },
      }),
      {}
    );

  render() {
    return (
      <div>
        Hello
        <button
          onClick={() => {
            this.setState({
              currentSelected: CARS,
            });
          }}
        >
          Toggle Selected Data
        </button>
        {this.state.selectedData.dataCount}
      </div>
    );
  }
}

export default TableWrapper;
