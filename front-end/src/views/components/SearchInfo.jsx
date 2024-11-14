import { useContext } from "react";

import { SearchContext } from "../../context/SearchContext";

const SearchInfo = () => {
  const { searchCriteria } = useContext(SearchContext);
  console.log(searchCriteria);

  return (
    <div>
      {Object.keys(searchCriteria).length > 0 ? (
        <>
          {"Showing you results for: "}
          {Object.entries(searchCriteria).map(
            ([key, value], index) =>
              value && (
                <span key={index}>
                  {value}
                  {index < Object.entries(searchCriteria).length - 1
                    ? ", "
                    : ""}
                </span>
              )
          )}
        </>
      ) : (
        "wtf"
      )}
    </div>
  );
};

export default SearchInfo;
