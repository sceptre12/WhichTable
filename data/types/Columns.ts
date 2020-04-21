export interface ColumnProperties {
  columnName: string;
  parent: string | undefined;
  isEditable: boolean;
}

export interface AnimalColumns {
  uuid: ColumnProperties;
  name: ColumnProperties;
  type: ColumnProperties;
  gender: ColumnProperties;
  image: ColumnProperties;
  isSelected: ColumnProperties;
  latitude: ColumnProperties;
  longitude: ColumnProperties;
}

export interface UserStocksColumns {
  uuid: ColumnProperties;
  first_name: ColumnProperties;
  last_name: ColumnProperties;
  email: ColumnProperties;
  gender: ColumnProperties;
  isSelected: ColumnProperties;
  ticker: ColumnProperties;
  name: ColumnProperties;
  marketCap: ColumnProperties;
  price: ColumnProperties;
  isOwned: ColumnProperties;
  isWatching: ColumnProperties;
}

export interface CarsColumns {
  uuid: ColumnProperties;
  name: ColumnProperties;
  make: ColumnProperties;
  model: ColumnProperties;
  vin: ColumnProperties;
  year: ColumnProperties;
  isSelected: ColumnProperties;
  image: ColumnProperties;
}
