import fuzzysearch from "fuzzysearch";
import * as React from "react";

export const validateSearchInitInput = (data = [], searchKeys = []) => {
  if (data.length === 0) throw new Error("Search metadata should not be empty");
  for (let key of searchKeys)
    for (let item of data)
      if (!(key in item))
        throw new Error("Search keys are invalid, not present in metadata");
};

export const searchFromMetadata = (data = [], searchKeys = [], query = "") => {
  return data.filter((item) => {
    for (let key of searchKeys)
      if (fuzzysearch(query.toLocaleLowerCase(), item[key].toLocaleLowerCase()))
        return true;
    return false;
  });
};
export const useReactSearch = (data = [], searchKeys = []) => {
  React.useEffect(() => {
    validateSearchInitInput(data, searchKeys);
  }, []);
  return (query = "") => searchFromMetadata(data, searchKeys, query);
};
