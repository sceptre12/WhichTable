import React, { Component } from "react";
import { string } from "prop-types";

import BaseTable from "./BaseTable";

// Data
import cars from "data/src/json/cars.json";

import { carsColumns } from "./columns";

class CarTableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: cars,
      columns: carsColumns,
    };
  }

  // These listeners normally would be different depending on the data type but I'm making them generic for now

  onCancel = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onChange = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onConfirm = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyUp = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyDown = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyPress = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  carFiltering = (data, filterVal) => {
    return !filterVal
      ? data
      : data.filter((currentData) => {
          let isFiltered = false;

          // Check on all of the keys to see what matches
          for (let [key, value] of Object.entries(currentData.car)) {
            if (isFiltered) break;
            if (key === "isSelected") continue;

            const type = typeof value;

            if (type === "string") {
              isFiltered = value.includes(filterVal);
            } else if (type === "number") {
              isFiltered = `${value}`.includes(filterVal);
            }
          }

          return isFiltered;
        });
  };

  render() {
    const { data, columns } = this.state;
    const { filterInfo } = this.props;

    return (
      <BaseTable
        data={this.carFiltering(data, filterInfo)}
        columns={columns}
        cellListeners={{
          onCancel: this.onCancel,
          onChange: this.onChange,
          onConfirm: this.onConfirm,
          onKeyPress: this.onKeyPress,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
        }}
      />
    );
  }
}

CarTableWrapper.propTypes = {
  filterInfo: string.isRequired,
};

export default CarTableWrapper;
