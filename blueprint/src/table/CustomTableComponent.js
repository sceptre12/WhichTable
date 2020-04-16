import React, { Component } from "react";
import { Column, Table, Cell } from "@blueprintjs/table";
import { searchFiltering } from "./tableUtil";
import cars from "data/cars.json";
import animal from "data/animal.json";
import userStocks from "data/userstocks.json";
import {
  USER_STOCKS,
  ANIMALS,
  CARS,
  animalColumns,
  userStocksColumns,
  carsColumns,
} from "data/dataTypes";

class TableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [ANIMALS]: animal,
      [CARS]: cars,
      [USER_STOCKS]: userStocks,
      currentSelected: USER_STOCKS,
      /**
       * This box is data agnostic
       * The information here shouldnt care about the data thats being provided
       */
      selectedData: {
        dataCount: userStocks.length, // Ignore the redundancy
        filterValue: "",
        filteredData: userStocks, // The default data is unfiltered
        columnInfo: this.getSelectedDataColumns(USER_STOCKS),
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSelected !== this.state.currentSelected) {
      this.setState((state) => {
        const filteredData = searchFiltering(
          state[state.currentSelected],
          state.selectedData.filterValue
        );
        return {
          ...state,
          selectedData: {
            ...state.selectedData,
            dataCount: filteredData.length,
            columnInfo: this.getSelectedDataColumns(state.currentSelected),
            filteredData,
          },
        };
      });
    }
  }

  getSelectedDataColumns = (selectedData) => {
    let columnInfo;
    switch (selectedData) {
      case ANIMALS:
        columnInfo = animalColumns;
        break;
      case CARS:
        columnInfo = carsColumns;
        break;
      case USER_STOCKS:
        columnInfo = userStocksColumns;
        break;
      default:
        throw new Error("Invalid data:  " + selectedData);
    }

    return columnInfo;
  };

  updateFilterValue = (e) => {
    const filterValue = e.target.value;

    this.setState((state) => {
      const filteredData = searchFiltering(
        state[state.currentSelected],
        filterValue
      );
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          filterValue,
          filteredData,
          dataCount: filteredData.length,
        },
      };
    });
  };

  /**
   * TODO work on adding the logic to switch between rendering an editable cell or a plain
   * cell.
   */
  columnRender = (columnInfo) => {
    if (!columnInfo) return null;
    return Object.keys(columnInfo).map((columnKey, index) => {
      const { columnName, parent, isEditable } = columnInfo[columnKey];
      return (
        <Column
          key={index}
          name={columnName}
          cellRenderer={this.cellRenderer.bind(null, columnKey, parent)}
        />
      );
    });
  };

  /**
   * TODO figure out how to add mouse click interactions for cells
   * Unresolved issue: https://github.com/palantir/blueprint/issues/508
   *  the below doesn't work
   */
  cellRenderer = (key, parent, rowNumber) => {
    const dataObject = this.state.selectedData.filteredData[rowNumber];
    let value = !!parent ? dataObject[parent][key] : dataObject[key];
    return (
      <Cell>
        <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
      </Cell>
    );
  };

  changeDataSets = (e) => {
    const currentSelected = e.target.value;
    this.setState((state) => {
      const filteredData = searchFiltering(
        state[currentSelected],
        state.selectedData.filterValue
      );
      return {
        ...state,
        currentSelected,
        selectedData: {
          ...state.selectedData,
          dataCount: filteredData.length,
          columnInfo: this.getSelectedDataColumns(currentSelected),
          filteredData,
        },
      };
    });
  };

  render() {
    const {
      selectedData: { dataCount, filterValue, columnInfo },
      currentSelected,
    } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="filter">Filter</label>
          <input
            name="filter"
            type="text"
            value={filterValue}
            onChange={this.updateFilterValue}
          />
        </div>
        <select
          id="dataSelect"
          value={currentSelected}
          onChange={this.changeDataSets}
        >
          <option value={ANIMALS}>{ANIMALS}</option>
          <option value={CARS}>{CARS}</option>
          <option value={USER_STOCKS}>{USER_STOCKS}</option>
        </select>
        {this.state.selectedData.dataCount}

        <Table numRows={dataCount} defaultColumnWidth={100}>
          {this.columnRender(this.getSelectedDataColumns(currentSelected))}
        </Table>
      </div>
    );
  }
}

export default TableWrapper;
