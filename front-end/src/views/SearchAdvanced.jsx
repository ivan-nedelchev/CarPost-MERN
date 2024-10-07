//TODO: Save search criteria in redux state and only reset it after leaving search/results page
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext.jsx";
import {
  makesData,
  modelsData,
  featuresData,
  euroData,
  fuelData,
  colorData,
  bodyData,
} from "../utils/carData.js";
import Button from "./components/Button.jsx";
import "./SearchAdvanced.css";

const SearchAdvanced = () => {
  const [localSearchData, setLocalSearchData] = useState({}); //Upgrade this later by using redux state to sync previously set criteria from the home page
  const [features, setFeatures] = useState([]);
  const [models, setModels] = useState([]);
  const { updateSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "make") {
      setLocalSearchData({
        ...localSearchData,
        [name]: value,
        // model: "",
      });
    } else {
      setLocalSearchData({
        ...localSearchData,
        [name]: value,
      });
    }
  };
  const handleFeatureChange = (e) => {
    //handle car feature checking and unchecking
    const { name, value, checked } = e.target;
    if (checked) {
      setFeatures((features) => [...features, value]);
    } else {
      setFeatures((features) =>
        features.filter((feature) => feature !== value)
      );
    }
    console.log(features);

    // const updatedFeatureCategory = { ...features[name] };
    // if (checked) {
    //   updatedFeatureCategory[value] = true;
    // } else {
    //   delete updatedFeatureCategory[value];
    // }
    // setFeatures({
    //   ...features,
    //   [name]: updatedFeatureCategory,
    // });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const searchData = {
      ...localSearchData,
      features,
    };
    console.log(searchData);
    updateSearch(searchData);
    const queryParams = new URLSearchParams(searchData).toString();
    navigate(`/results?${queryParams}`);
  };
  return (
    <div className="container search-container">
      <h2 className="search-heading">Detailed car search</h2>
      <div className="search-detailed">
        <form onSubmit={handleSubmit} className="search-form-detailed">
          {/*TODO: Make multitple selectable */}
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
            <label htmlFor="bodyType">Body type:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="bodyType"
                name="bodyType"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                {bodyData.map((body) => (
                  <option key={body} value={body.toLowerCase()}>
                    {body}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="yearMin">Year from:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="yearMin"
                name="yearMin"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                <option value="2010">2010</option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="yearMax">Year up to:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="yearMax"
                name="yearMax"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="priceMax">Price up to:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="priceMax"
                name="priceMax"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                <option value="150000">150000</option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="fuelType">Fuel:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="fuelType"
                name="fuelType"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                <option value="diesel">Diesel</option>
                <option value="gasoline">Gasoline</option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="powerMin">Power (hp):</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="powerMin"
                name="powerMin"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="transmission">Transmission:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="transmission"
                name="transmission"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>
          <div className="search-option">
            <label htmlFor="color">Color:</label>
            <div className="dropdown">
              <select
                onChange={(e) => {
                  handleInputChange(e);
                }}
                id="color"
                name="color"
                defaultValue=""
              >
                <option className="firstOption" value="">
                  Any
                </option>
                {colorData.map((color) => (
                  <option key={color} value={color.toLowerCase()}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button type="submit">Search</Button>
          <div></div>
          {Object.keys(featuresData).map((category) => (
            <div key={category}>
              <label>
                {category.charAt(0).toUpperCase() + category.slice(1)}:
              </label>
              {featuresData[category].map((feature, index) => (
                <div key={index}>
                  <label
                    className="feature-label"
                    htmlFor={`feature-${category}-${index}`}
                  >
                    <input
                      onClick={handleFeatureChange}
                      className="checkbox"
                      type="checkbox"
                      id={`feature-${category}-${index}`}
                      name={category}
                      value={feature}
                    />
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SearchAdvanced;
