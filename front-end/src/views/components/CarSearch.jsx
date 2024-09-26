import PropTypes from "prop-types";
import { useState } from "react";
import { makesData, modelsData } from "../../utils/carData";
import { fetchCars } from "../../utils/cars";
import "./CarSearch.css";
import Button from "./Button";
const CarSearch = ({ setCars }) => {
  const [models, setModels] = useState([]);
  const [searchData, setSearchData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "make") {
      setSearchData({
        ...searchData,
        [name]: value,
        model: "",
      });
    } else {
      setSearchData({
        ...searchData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let searchParams = Object.assign({}, searchData);
    for (const searchParam in searchData) {
      // validate params
      if (searchData[searchParam] == "") {
        delete searchParams[searchParam];
      }
    }

    const carsArray = await fetchCars(searchParams);
    console.log(carsArray);
    setCars([...carsArray]);
  };
  return (
    <div className="picture-container container">
      <div className="search-section">
        <h1 className="home-message">
          Your
          <span className="orange-text"> dream car </span>
          is waiting for you.
        </h1>
        <div className="search-container">
          <form onSubmit={handleSubmit} className="search-form">
            <div className="search-option">
              <label htmlFor="make">Make:</label>
              <div className="dropdown">
                <select
                  onChange={(e) => {
                    setModels(modelsData[e.target.value]);
                    handleInputChange(e);
                  }}
                  id="make"
                  name="make"
                  defaultValue=""
                >
                  <option className="firstOption" value="">
                    Any
                  </option>
                  {makesData.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search-option">
              <label htmlFor="model">Model:</label>
              <div className="dropdown">
                <select
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  id="model"
                  name="model"
                  defaultValue=""
                >
                  <option className="firstOption" value="">
                    Any
                  </option>
                  {models?.length > 0 &&
                    models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="search-option">
              <label htmlFor="model">Model:</label>
              <div className="dropdown">
                <select
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  id="model"
                  name="model"
                  defaultValue=""
                >
                  <option className="firstOption" value="">
                    Any
                  </option>
                  {models?.length > 0 &&
                    models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="search-option">
              <label htmlFor="model">Model:</label>
              <div className="dropdown">
                <select
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  id="model"
                  name="model"
                  defaultValue=""
                >
                  <option className="firstOption" value="">
                    Any
                  </option>
                  {models?.length > 0 &&
                    models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="advanced orange-text">Advanced search</div>
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
CarSearch.propTypes = {
  setCars: PropTypes.func.isRequired,
};

export default CarSearch;
