import PropTypes from "prop-types";
import { useState } from "react";
import { makesData, modelsData } from "../../utils/carData";
import "./CarSearch.css";
import { fetchCars } from "../../utils/cars";
const CarSearch = ({ setCars }) => {
  const [models, setModels] = useState([]);
  const [searchData, setSearchData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let carsArray = await fetchCars(searchData);
    setCars([...carsArray]);
  };
  return (
    <div className="container">
      <h2>Car Selection Form</h2>
      <form onSubmit={handleSubmit}>
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
            <option disabled value="">
              Select Make
            </option>
            {makesData.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

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
            <option disabled value="">
              Select Model
            </option>
            {models.length > 0 &&
              models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
CarSearch.propTypes = {
  setCars: PropTypes.func.isRequired,
};

export default CarSearch;
