export interface ColumnProperties {
    columnName: string;
    parent: string | undefined;
    isEditable: boolean;
}
export declare type AnimalColProperties = "uuid" | "name" | "type" | "gender" | "image" | "isSelected" | "latitude" | "longitude";
export declare type AnimalColumns = {
    [key in AnimalColProperties]: ColumnProperties;
};
declare type UserStockColProperties = "uuid" | "first_name" | "last_name" | "email" | "gender" | "isSelected" | "ticker" | "name" | "marketCap" | "price" | "isOwned" | "isWatching";
export declare type UserStocksColumns = {
    [key in UserStockColProperties]: ColumnProperties;
};
declare type CarsColProperties = "uuid" | "name" | "make" | "model" | "vin" | "year" | "isSelected" | "image";
export declare type CarsColumns = {
    [key in CarsColProperties]: ColumnProperties;
};
export {};
