import { DataTypes } from "data/types/enums";
import {
  AnimalColumns,
  UserStocksColumns,
  CarsColumns,
} from "data/types/Columns";

import AnimalObj from "data/types/Animal";
import CarsObj from "data/types/Car";
import UserStocksObj from "data/types/UserStocks";

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
