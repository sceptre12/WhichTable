import { shape, arrayOf, number, string, bool } from "prop-types";

export const AnimalObjPropTtype = shape({
  uuid: string.isRequired,
  animal: shape({
    name: string.isRequired,
    type: string.isRequired,
    image: string.isRequired,
    gender: string.isRequired,
    isSelected: bool.isRequired,
    latitude: number.isRequired,
    longitude: number.isRequired,
  }),
  child: arrayOf(
    shape({
      name: string.isRequired,
      type: string.isRequired,
      id: string.isRequired,
      parentId: string.isRequired,
      isSelected: bool.isRequired,
    })
  ),
});

export const CarsObjPropType = shape({
  uuid: string.isRequired,
  car: shape({
    name: string.isRequired,
    make: string.isRequired,
    model: string.isRequired,
    vin: string.isRequired,
    year: number.isRequired,
    isSelected: bool.isRequired,
    image: string.isRequired,
  }),
});

export const UserStockObjPropType = shape({
  uuid: string.isRequired,
  first_name: string.isRequired,
  last_name: string.isRequired,
  gender: string.isRequired,
  isSelected: bool.isRequired,
  stock: shape({
    ticker: string.isRequired,
    name: string.isRequired,
    marketCap: string.isRequired,
    price: string.isRequired,
    isOwned: bool.isRequired,
    isWatching: bool.isRequired,
  }),
});
