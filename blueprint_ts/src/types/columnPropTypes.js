import { shape, string, bool, oneOf, undefined } from "prop-types";

export const ColumnValuePropTypes = shape({
  columnName: string.isRequired,
  parent: oneOf([string, undefined]),
  isEditable: bool.isRequired,
});

export const AnimalColPropTypes = shape({
  uuid: ColumnValuePropTypes.isRequired,
  name: ColumnValuePropTypes.isRequired,
  type: ColumnValuePropTypes.isRequired,
  gender: ColumnValuePropTypes.isRequired,
  image: ColumnValuePropTypes.isRequired,
  isSelected: ColumnValuePropTypes.isRequired,
  latitude: ColumnValuePropTypes.isRequired,
  longitude: ColumnValuePropTypes.isRequired,
});

export const UserStockColPropTypes = shape({
  uuid: ColumnValuePropTypes.isRequired,
  first_name: ColumnValuePropTypes.isRequired,
  last_name: ColumnValuePropTypes.isRequired,
  email: ColumnValuePropTypes.isRequired,
  gender: ColumnValuePropTypes.isRequired,
  isSelected: ColumnValuePropTypes.isRequired,
  ticker: ColumnValuePropTypes.isRequired,
  name: ColumnValuePropTypes.isRequired,
  marketCap: ColumnValuePropTypes.isRequired,
  price: ColumnValuePropTypes.isRequired,
  isOwned: ColumnValuePropTypes.isRequired,
  isWatching: ColumnValuePropTypes.isRequired,
});

export const CarsColPropTypes = shape({
  uuid: ColumnValuePropTypes.isRequired,
  name: ColumnValuePropTypes.isRequired,
  make: ColumnValuePropTypes.isRequired,
  model: ColumnValuePropTypes.isRequired,
  vin: ColumnValuePropTypes.isRequired,
  year: ColumnValuePropTypes.isRequired,
  isSelected: ColumnValuePropTypes.isRequired,
  image: ColumnValuePropTypes.isRequired,
});
