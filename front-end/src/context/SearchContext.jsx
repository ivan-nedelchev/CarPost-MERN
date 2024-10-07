import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    make: "",
    model: "",
    bodyType: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    fuel: "",
    powerFrom: "",
    powerTo: "",
    transmission: "",
    color: "",
    features: {},
  });

  const updateSearch = (newCriteria) => {
    setSearchCriteria(() => ({
      ...newCriteria,
    }));
  };

  return (
    <SearchContext.Provider value={{ searchCriteria, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
