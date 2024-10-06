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
    console.log(newCriteria);

    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      ...newCriteria,
    }));
    console.log(searchCriteria);
  };

  return (
    <SearchContext.Provider value={{ searchCriteria, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
