export interface Stock {
    ticker: string;
    name: string;
    marketCap: string;
    price: string;
    isOwned: boolean;
    isWatching: boolean;
}
export default interface StockObj {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    isSelected: boolean;
    stock: Stock;
}
