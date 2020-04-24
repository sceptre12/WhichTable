import React from "react";
import { Column, Table } from "@blueprintjs/table";

import getCellRenderer from "./util/cellRenderers";

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

const TableWrapper = ({ data, columns, cellListeners }) => {
  /**
   * Todo - There will need to be logic coming from external wrapper
   * that will pass styles to the column and the cell
   */
  const columnRender = () => {
    return Object.keys(columns).map((key) => {
      const {
        columnName,
        parent,
        isEditable,
        isImage,
        isColor,
        isButton,
        isCheckBox,
      } = columns[key];
      const cellRenderer = getCellRenderer(
        isEditable,
        isImage,
        isColor,
        isButton,
        isCheckBox
      );
      return (
        <Column
          key={key}
          name={columnName}
          cellRenderer={cellRenderer.bind(
            null,
            data,
            key,
            parent,
            cellListeners
          )}
        />
      );
    });
  };

  // editableCellRenderer = (key, parent, rowNumber) => {};

  return (
    <div>
      <Table
        numRows={data.length}
        defaultColumnWidth={100}
        defaultRowHeight={50}
      >
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
