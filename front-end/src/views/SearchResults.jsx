import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SearchContext } from "../context/SearchContext";
import { fetchCars } from "../utils/cars";

const SearchResults = () => {
  const { searchCriteria, updateSearch } = useContext(SearchContext);
  const location = useLocation();

  // Parse query parameters from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCriteria = {
      make: queryParams.get("make") || "",
      model: queryParams.get("model") || "",
      bodyType: queryParams.get("bodyType") || "",
      yearFrom: queryParams.get("yearFrom") || "",
      yearTo: queryParams.get("yearTo") || "",
      priceFrom: queryParams.get("priceFrom") || "",
      priceTo: queryParams.get("priceTo") || "",
      fuel: queryParams.get("fuel") || "",
      powerFrom: queryParams.get("powerFrom") || "",
      powerTo: queryParams.get("powerTo") || "",
      transmission: queryParams.get("transmission") || "",
      color: queryParams.get("color") || "",
      features: queryParams.get("features") || "",
    };
    if(newCriteria.features.length != 0) {
      newCriteria.features = newCriteria.features.split(",")
    }
    
    updateSearch(newCriteria);
    console.log(newCriteria);
  }, []);

  return (
    <div>
      <h2>Search Results for:</h2>
      <ul>
        {Object.entries(searchCriteria).map(([key, value]) => {
          if (value !== "" && typeof value !== "object") {
            return (
              <li key={key}>
                {key}: {value}
              </li>
            );
          } else if (key == "features" && Object.values(value).length > 0) {
            return (
              <li key={key}>
                {key}: {value.join(", ")}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
