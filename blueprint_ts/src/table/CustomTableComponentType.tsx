import React, { Component, SyntheticEvent } from "react";
import { Column, Table, Cell } from "@blueprintjs/table";

// Utils
import { searchFiltering } from "./tableUtil";

// Data
import cars from "data/src/json/cars.json";
import animal from "data/src/json/animal.json";
import userStocks from "data/src/json/userstocks.json";
import { animalColumns, userStocksColumns, carsColumns } from "./columns";

// Types
import CustomTableStateType from "../types/CustomTableState";
import {
  AnimalColumns,
  UserStocksColumns,
  CarsColumns,
  ColumnProperties,
} from "data/dist/types/Columns";
import { DataTypes } from "data/dist/types/dataTypeEnums";

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
  ): AnimalColumns | CarsColumns | UserStocksColumns => {
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
  columnRender = <
    T extends {
      [key: string]: ColumnProperties;
    }
  >(
    columnInfo: T
  ) => {
    return Object.keys(columnInfo).map((key) => {
      const { columnName, parent, isEditable } = columnInfo[key];

      return (
        <Column
          key={key}
          name={columnName}
          cellRenderer={this.cellRenderer.bind(null, key, parent)}
        />
      );
    });
  };

  /**
   * TODO figure out how to add mouse click interactions for cells
   * Unresolved issue: https://github.com/palantir/blueprint/issues/508
   *  the below doesn't work
   */
  cellRenderer = (
    key: string,
    parent: string | undefined,
    rowNumber: number
  ) => {
    const dataObject = this.state.selectedData.filteredData[rowNumber] as any;
    let value = !!parent ? dataObject[parent][key] : dataObject[key];
    return (
      <Cell>
        <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
      </Cell>
    );
  };

  // editableCellRenderer = (key, parent, rowNumber) => {};

  changeDataSets = (e: SyntheticEvent) => {
    const select = e.target as HTMLInputElement;
    const currentSelected = select.value as DataTypes;
    this.setState((state: CustomTableStateType) => {
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
          <option value={DataTypes.ANIMALS}>{DataTypes.ANIMALS}</option>
          <option value={DataTypes.CARS}>{DataTypes.CARS}</option>
          <option value={DataTypes.USER_STOCKS}>{DataTypes.USER_STOCKS}</option>
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
