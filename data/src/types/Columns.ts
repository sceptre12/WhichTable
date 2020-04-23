export interface ColumnProperties {
  columnName: string;
  parent: string | undefined;
  isEditable: boolean;
}

export type AnimalColProperties =
  | "uuid"
  | "name"
  | "type"
  | "gender"
  | "image"
  | "isSelected"
  | "latitude"
  | "longitude";

export type AnimalColumns = {
  [key in AnimalColProperties]: ColumnProperties;
};

type UserStockColProperties =
  | "uuid"
  | "first_name"
  | "last_name"
  | "email"
  | "gender"
  | "isSelected"
  | "ticker"
  | "name"
  | "marketCap"
  | "price"
  | "isOwned"
  | "isWatching";

export type UserStocksColumns = {
  [key in UserStockColProperties]: ColumnProperties;
};

type CarsColProperties =
  | "uuid"
  | "name"
  | "make"
  | "model"
  | "vin"
  | "year"
  | "isSelected"
  | "image";
export type CarsColumns = {
  [key in CarsColProperties]: ColumnProperties;
};
