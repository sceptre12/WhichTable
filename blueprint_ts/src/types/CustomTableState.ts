import { DataTypes } from "data/src/types/dataTypeEnums";
import {
  AnimalColumns,
  UserStocksColumns,
  CarsColumns,
} from "data/src/types/Columns";

import AnimalObj from "data/src/types/Animal";
import CarsObj from "data/src/types/Car";
import UserStocksObj from "data/src/types/UserStocks";

export default interface CustomTableStateType {
  [DataTypes.ANIMALS]: Array<AnimalObj>;
  [DataTypes.CARS]: Array<CarsObj>;
  [DataTypes.USER_STOCKS]: Array<UserStocksObj>;
  currentSelected: DataTypes;
  selectedData: {
    dataCount: number;
    filterValue: string;
    filteredData: Array<AnimalObj | CarsObj | UserStocksObj>;
    columnInfo: AnimalColumns | UserStocksColumns | CarsColumns;
  };
}
