import React, { Component, Fragment } from "react";
import { string } from "prop-types";

import CustomTableComponentType from "./CustomTableComponentType";

// Data
import animal from "data/src/json/animal.json";

import { animalColumns } from "./columns";

class AnimalTableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: animal,
      columns: animalColumns,
    };
  }

  // These listeners normally would be different depending on the data type but I'm making them generic for now

  onCancel = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onChange = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onConfirm = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyUp = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyDown = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyPress = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  animalFiltering = (data, filterVal) => {
    return !filterVal
      ? data
      : data.filter((currentData) => {
          let isFiltered = false;

          // Check on all of the keys to see what matches
          for (let [key, value] of Object.entries(currentData.animal)) {
            if (isFiltered) break;
            if (key === "image" || key === "isSelected") continue;

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
      <CustomTableComponentType
        data={this.animalFiltering(data, filterInfo)}
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

AnimalTableWrapper.propTypes = {
  filterInfo: string.isRequired,
};

export default AnimalTableWrapper;
