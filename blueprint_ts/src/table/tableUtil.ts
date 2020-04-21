import AnimalObj from "data/types/Animal";
import CarObj from "data/types/Car";
import UserStockObj from "data/types/UserStocks";

/**
 * TABLE UTILS:
 * The utils below should be data agnostic with some exceptions
 * the data provided will be in the format of an object
 */

/**
 * This filtering only checks the top level object values
 * that are strings or numbers
 *
 * TODO potentially enhance this to filter on the second level object values
 * @param data // an array
 */
export const searchFiltering = (
  data: Array<AnimalObj | CarObj | UserStockObj>,
  filterValue: string
): Array<AnimalObj | CarObj | UserStockObj> => {
  // The type of filter value is always a string
  return !!filterValue
    ? data
    : data.filter((currentData: AnimalObj | CarObj | UserStockObj) => {
        let isFiltered = false;

        // Check on all of the keys to see what matches
        for (let [key, value] of Object.entries(currentData)) {
          if (isFiltered) break;
          if (key === "uuid") continue;
          const type = typeof value;

          if (type === "string") {
            isFiltered = value.includes(filterValue);
          } else if (type === "number") {
            isFiltered = `${value}`.includes(filterValue);
          }
        }

        return isFiltered;
      });
};
