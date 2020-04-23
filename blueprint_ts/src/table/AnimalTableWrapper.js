import React, { Component, Fragment } from "react";
import { string } from "prop-types";

import CustomTableComponentType from "./CustomTableComponentType";
import { ANIMALS } from "data/dist/types/dataTypeEnums";

// Data
import animal from "data/src/json/animal.json";

import { animalColumns } from "./columns";
import { searchFiltering } from "./tableUtil";

class AnimalTableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: animal,
      columns: animalColumns,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterInfo !== prevProps.filterInfo) {
      this.setState({
        data: searchFiltering(ANIMALS, this.props.filterInfo),
      });
    }
  }

  // These listeners normally would be different depending on the data type but I'm making them generic for now

  onCancel = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onChange = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onConfirm = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyUp = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyDown = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  onKeyPress = (cellObjData, key, cellValue, rowNumber, colNumber) => {};

  render() {
    const { data, columns } = this.state;
    return (
      <CustomTableComponentType
        data={data}
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
