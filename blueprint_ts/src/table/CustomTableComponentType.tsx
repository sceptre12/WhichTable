import React, { Component, SyntheticEvent } from "react";
import { Column, Table, Cell } from "@blueprintjs/table";

// Utils
import { searchFiltering } from "./tableUtil";

// Data
import cars from "data/cars.json";
import animal from "data/animal.json";
import userStocks from "data/userstocks.json";
import { animalColumns, userStocksColumns, carsColumns } from "data/dataTypes";

// Types
import CustomTableStateType from "../types/CustomTableState";
import {
  AnimalColumns,
  UserStocksColumns,
  CarsColumns,
  ColumnProperties,
} from "data/types/Columns";
import { DataTypes } from "data/types/enums";
import AnimalObj from "data/types/Animal";
import CarsObj from "data/types/Car";
import UserStocksObj from "data/types/UserStocks";

class TableWrapper extends Component {
  state: CustomTableStateType;

  constructor(props: any) {
    super(props);

    this.state = {
      [DataTypes.ANIMALS]: animal,
      [DataTypes.CARS]: cars,
      [DataTypes.USER_STOCKS]: userStocks,
      currentSelected: DataTypes.USER_STOCKS,
      /**
       * This box is data agnostic
       * The information here shouldnt care about the data thats being provided
       */
      selectedData: {
        dataCount: userStocks.length, // Ignore the redundancy
        filterValue: "",
        filteredData: userStocks, // The default data is unfiltered
        columnInfo: this.getSelectedDataColumns(DataTypes.USER_STOCKS),
      },
    };
  }

  componentDidUpdate(prevProps: any, prevState: CustomTableStateType) {
    if (prevState.currentSelected !== this.state.currentSelected) {
      this.setState((state: CustomTableStateType) => {
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

  /**
   * Functions inside of this block should be declared elsewhere.
   * Their results should be passed in as a prop to this component
   */
  getSelectedDataColumns = (
    selectedData: DataTypes
  ): AnimalColumns | UserStocksColumns | CarsColumns => {
    let columnInfo;
    switch (selectedData) {
      case DataTypes.ANIMALS:
        columnInfo = animalColumns;
        break;
      case DataTypes.CARS:
        columnInfo = carsColumns;
        break;
      case DataTypes.USER_STOCKS:
        columnInfo = userStocksColumns;
        break;
      default:
        throw new Error("Invalid data:  " + selectedData);
    }

    return columnInfo;
  };

  /**
   * The functions defined inside of the returned object can
   * come from anywhere, but we're placing them here just for
   * ease of access.
   *
   */
  getFunctionDataForColumns = (selectedData: DataTypes) => {
    let objFuncForColumns = {};
    switch (selectedData) {
      case DataTypes.ANIMALS:
        // objFuncForColumns = {
        //   onCancel: (cellObjData, key, cellValue, rowNumber, colNumber) => {},
        //   onChange: (cellObjData, key, cellValue, rowNumber, colNumber) => {
        //     this.setState((state) => ({}));
        //   },
        //   onConfirm: (cellObjData, key, cellValue, rowNumber, colNumber) => {},
        //   // The same logics can be applied for onKey*
        // };
        break;
      case DataTypes.CARS:
        objFuncForColumns = {};
        break;
      case DataTypes.USER_STOCKS:
        objFuncForColumns = {};
        break;
      default:
        throw new Error("Invalid data:  " + selectedData);
    }
  };

  // End of external functions

  updateFilterValue = (e: SyntheticEvent) => {
    const filterInput = e.target as HTMLInputElement;
    const filterValue = filterInput.value;

    this.setState((state: CustomTableStateType) => {
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
  columnRender = (columnInfo: any) => {
    let arr = [];

    for (let key in columnInfo) {
      const { columnName, parent, isEditable } = columnInfo[key];
      arr.push(
        <Column
          key={key}
          name={columnName}
          cellRenderer={this.cellRenderer.bind(null, key, parent)}
        />
      );
    }

    return arr;
  };

  /**
   * TODO figure out how to add mouse click interactions for cells
   * Unresolved issue: https://github.com/palantir/blueprint/issues/508
   *  the below doesn't work
   */
  cellRenderer = (key: string, parent: string, rowNumber: number) => {
    const dataObject = this.state.selectedData.filteredData[rowNumber] as any;
    let value = !!parent ? dataObject[parent][key] : dataObject[key];
    return (
      <Cell>
        <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
      </Cell>
    );
  };

  editableCellRenderer = (key, parent, rowNumber) => {};

  changeDataSets = (e: SyntheticEvent) => {
    const select = e.target as HTMLInputElement;
    const currentSelected = select.value;
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
