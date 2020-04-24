import React from "react";
import { Cell, EditableCell } from "@blueprintjs/table";

/**
 * TODO figure out how to add mouse click interactions for cells
 * Unresolved issue: https://github.com/palantir/blueprint/issues/508
 *  the below doesn't work
 */
const basicCellRenderer = (
  isEditable,
  data,
  key,
  parent,
  cellListeners,
  rowNumber
) => {
  const dataObject = data[rowNumber];

  let value = !!parent ? dataObject[parent][key] : dataObject[key];

  return isEditable ? (
    <EditableCell
      value={value}
      onChange={cellListeners.onChange.bind(
        null,
        dataObject,
        key,
        parent,
        value,
        rowNumber
      )}
      onCancel={cellListeners.onCancel}
      onConfirm={cellListeners.onConfirm}
    />
  ) : (
    <Cell>
      <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
    </Cell>
  );
};

const imageCellRenderer = (
  isEditable,
  data,
  key,
  parent,
  cellListeners,
  rowNumber
) => {
  const dataObject = data[rowNumber];
  let value = !!parent ? dataObject[parent][key] : dataObject[key];
  return (
    <Cell style={{ width: 50, height: 50 }}>
      <img src={value} alt="" style={{ width: 50, height: 50 }} />
    </Cell>
  );
};

const colorCellRenderer = (
  isEditable,
  data,
  key,
  parent,
  cellListeners,
  rowNumber
) => {
  const dataObject = data[rowNumber];
  let value = !!parent ? dataObject[parent][key] : dataObject[key];
  return (
    <Cell>
      <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
    </Cell>
  );
};

const buttonCellRenderer = (
  isEditable,
  data,
  key,
  parent,
  cellListeners,
  rowNumber
) => {
  const dataObject = data[rowNumber];
  let value = !!parent ? dataObject[parent][key] : dataObject[key];
  return (
    <Cell>
      <span onClick={() => console.log("HELLo")}>{value.toString()}</span>
    </Cell>
  );
};

const checkBoxCellRenderer = (
  isEditable,
  data,
  key,
  parent,
  cellListeners,
  rowNumber
) => {
  const dataObject = data[rowNumber];
  let value = !!parent ? dataObject[parent][key] : dataObject[key];
  return (
    <Cell>
      <input
        type="checkbox"
        value={value}
        onChange={cellListeners.onChange.bind(
          null,
          dataObject,
          key,
          parent,
          value,
          rowNumber
        )}
      />
    </Cell>
  );
};

const getCellRenderer = (
  isEditable,
  isImage,
  isColor,
  isButton,
  isCheckBox
) => {
  let cellRendererFunction;
  if (!isImage && !isColor && !isButton && !isCheckBox) {
    cellRendererFunction = basicCellRenderer;
  } else if (isImage) {
    cellRendererFunction = imageCellRenderer;
  } else if (isColor) {
    cellRendererFunction = colorCellRenderer;
  } else if (isCheckBox) {
    cellRendererFunction = checkBoxCellRenderer;
  } else if (isButton) {
    cellRendererFunction = buttonCellRenderer;
  }

  return cellRendererFunction.bind(null, isEditable);
};

// Returns a cell based on if its editable or not

export default getCellRenderer;
