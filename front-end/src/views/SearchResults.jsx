import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SearchContext } from "../context/SearchContext";
import { fetchCars } from "../utils/cars";
import CarList from "./components/CarList";
import SearchInfo from "./components/SearchInfo";

const SearchResults = () => {
  const { searchCriteria, updateSearch } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const location = useLocation();

  // Parse query parameters from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCriteria = {};
    const keys = [
      "make",
      "model",
      "category",
      "bodyType",
      "yearFrom",
      "yearTo",
      "priceFrom",
      "priceTo",
      "fuel",
      "powerFrom",
      "powerTo",
      "transmission",
      "color",
      "features",
    ];

    keys.forEach((key) => {
      const value = queryParams.get(key);
      if (value) {
        // Only add the key if there is a value
        newCriteria[key] = key === "features" ? value.split(",") : value;
      }
    });

    updateSearch(newCriteria);
    const getSearchResult = async () => {
      const searchResult = await fetchCars(newCriteria);
      setCars([...searchResult]);
      setIsLoading(false);
    };
    getSearchResult();
  }, [location.search]);
  // console.log(searchCriteria);

  return (
    <div>
      {!isLoading && <SearchInfo />}
      <CarList cars={cars} orienation="vertical" />
    </div>
  );
};

export default SearchResults;
