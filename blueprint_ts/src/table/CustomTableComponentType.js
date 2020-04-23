import React from "react";

// Prop Types
import { func, oneOf, arrayOf, shape } from "prop-types";
import {
  AnimalObjPropTtype,
  CarsObjPropType,
  UserStockObjPropType,
} from "../types/dataObjectPropTypes";
import {
  AnimalColPropTypes,
  CarsColPropTypes,
  UserStockColPropTypes,
} from "../types/columnPropTypes";

import { Column, Table, Cell } from "@blueprintjs/table";

const TableWrapper = ({ data, columns, cellListeners }) => {
  /**
   * TODO work on adding the logic to switch between rendering an editable cell or a plain
   * cell.
   */
  const columnRender = () => {
    return Object.keys(columns).map((key) => {
      const { columnName, parent, isEditable } = columns[key];

      return (
        <Column
          key={key}
          name={columnName}
          cellRenderer={cellRenderer.bind(null, key, parent)}
        />
      );
    });
  };

  /**
   * TODO figure out how to add mouse click interactions for cells
   * Unresolved issue: https://github.com/palantir/blueprint/issues/508
   *  the below doesn't work
   */
  const cellRenderer = (key, parent, rowNumber) => {
    const dataObject = data[rowNumber];
    let value = !!parent ? dataObject[parent][key] : dataObject[key];
    return (
      <Cell>
        <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
      </Cell>
    );
  };

  // editableCellRenderer = (key, parent, rowNumber) => {};

  return (
    <div>
      <Table numRows={data.length} defaultColumnWidth={100}>
        {columnRender()}
      </Table>
    </div>
  );
};

TableWrapper.propTypes = {
  data: oneOf([
    arrayOf(AnimalObjPropTtype),
    arrayOf(CarsObjPropType),
    arrayOf(UserStockObjPropType),
  ]).isRequired,

  columns: oneOf([CarsColPropTypes, AnimalColPropTypes, UserStockColPropTypes])
    .isRequired,

  cellListeners: shape({
    onCancel: func,
    onChange: func,
    onConfirm: func,
    onKeyUp: func,
    onKeyDown: func,
    onKeyPress: func,
  }),
};

export default TableWrapper;
