/**
 * TABLE UTILS:
 * The utils below should be data agnostic with some exceptions
 * the data provided will be in the format of an object
 */

/**
 * This filtering only checks the top level object values
 * that are strings or numbers
 *
 * @param data // an array
 */
export const searchFiltering = (data, filterValue) => {
  // The type of filter value is always a string
  return filterValue === ""
    ? data
    : data.reduce((resultArr, currentData) => {
        let isFiltered = false;

        const currentDataKeys = Object.keys(currentData);

        // Filter on all of the keys to see what matches
        for (let key of currentDataKeys) {
          if (isFiltered) break;
          if (key === "id") continue;
          const value = currentData[key];
          const type = typeof value;

          if (type === "string") {
            isFiltered = value.includes(filterValue);
          } else if (type === "number") {
            isFiltered = `${value}`.includes(filterValue);
          }
        }

        return isFiltered
          ? [
              ...resultArr,
              {
                ...currentData,
              },
            ]
          : resultArr;
      }, []);
};
