import {
  AnimalColumns,
  UserStocksColumns,
  CarsColumns,
} from "data/src/types/Columns";

export const animalColumns: AnimalColumns = {
  uuid: {
    columnName: "uuid",
    parent: undefined,
    isEditable: false,
  },
  name: {
    columnName: "Name",
    parent: "animal",
    isEditable: true,
  },
  type: {
    columnName: "Type",
    parent: "animal",
    isEditable: true,
  },
  gender: {
    columnName: "Gender",
    parent: "animal",
    isEditable: true,
  },
  image: {
    columnName: "Image",
    parent: "animal",
    isEditable: true,
  },
  isSelected: {
    columnName: "IsSelected",
    parent: "animal",
    isEditable: true,
  },
  latitude: {
    columnName: "Latitude",
    parent: "animal",
    isEditable: true,
  },
  longitude: {
    columnName: "Longitude",
    parent: "animal",
    isEditable: true,
  },
};

export const userStocksColumns: UserStocksColumns = {
  uuid: {
    columnName: "uuid",
    parent: undefined,
    isEditable: false,
  },
  first_name: {
    columnName: "First Name",
    parent: undefined,
    isEditable: false,
  },
  last_name: {
    columnName: "Last Name",
    parent: undefined,
    isEditable: false,
  },
  email: {
    columnName: "Email",
    parent: undefined,
    isEditable: false,
  },
  gender: {
    columnName: "Gender",
    parent: undefined,
    isEditable: false,
  },
  isSelected: {
    columnName: "IsSelected",
    parent: undefined,
    isEditable: true,
  },
  ticker: {
    columnName: "Ticker",
    parent: "stock",
    isEditable: true,
  },
  name: {
    columnName: "Name",
    parent: "stock",
    isEditable: true,
  },
  marketCap: {
    columnName: "MarketCap",
    parent: "stock",
    isEditable: true,
  },
  price: {
    columnName: "Price",
    parent: "stock",
    isEditable: true,
  },
  isOwned: {
    columnName: "IsOwned",
    parent: "stock",
    isEditable: true,
  },
  isWatching: {
    columnName: "IsWatching",
    parent: "stock",
    isEditable: true,
  },
};

export const carsColumns: CarsColumns = {
  uuid: {
    columnName: "uuid",
    parent: undefined,
    isEditable: false,
  },
  name: {
    columnName: "Name",
    parent: "car",
    isEditable: true,
  },
  make: {
    columnName: "Make",
    parent: "car",
    isEditable: false,
  },
  model: {
    columnName: "Model",
    parent: "car",
    isEditable: false,
  },
  vin: {
    columnName: "Vin",
    parent: "car",
    isEditable: false,
  },
  year: {
    columnName: "Year",
    parent: "car",
    isEditable: false,
  },
  isSelected: {
    columnName: "IsSelected",
    parent: "car",
    isEditable: true,
  },
  image: {
    columnName: "Image",
    parent: "car",
    isEditable: true,
  },
};
