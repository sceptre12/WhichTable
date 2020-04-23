export interface Car {
    name: string;
    make: string;
    model: string;
    vin: string;
    year: number;
    isSelected: boolean;
    image: string;
}
export default interface CarObj {
    uuid: string;
    car: Car;
}
