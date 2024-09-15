import { useState } from "react";
import "./CreateCar.css";
import { post } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { featuresData } from "../utils/carData.js";
const path = "/car/";
const CreateCar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createCar = async (ev) => {
    ev.preventDefault();
    const selectedFeatures = {};
    Object.keys(featuresData).forEach((category) => {
      const checkboxes = document.querySelectorAll(
        `input[name="${category}"]:checked`
      );
      selectedFeatures[category] = Array.from(checkboxes).map(
        (checkbox) => checkbox.value
      );
    });

    let carObject = await post(path, {
      make: formData.make,
      model: formData.model,
      modification: formData.modification,
      fuel: formData.fuel,
      capacity: Number(formData.capacity),
      power: Number(formData.power),
      euroStandard: Number(formData.euroStandard),
      transmission: formData.transmission,
      category: formData.category,
      year: Number(formData.year),
      mileage: Number(formData.mileage),
      description: formData.description,
      color: formData.color,
      location: formData.location,
      features: selectedFeatures,
      image: formData.image,
      price: Number(formData.price),
    });
    if (carObject) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="carFormWrapper">
        <h1>Post a car</h1>
        <form className="car-form" onSubmit={createCar} action="/create/car" method="post">
          <div className="form-group">
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              id="make"
              name="make"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modification">Modification:</label>
            <input
              type="text"
              id="modification"
              name="modification"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fuel">Fuel:</label>
            <input
              type="text"
              id="fuel"
              name="fuel"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Capacity:</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="power">Power:</label>
            <input
              type="number"
              id="power"
              name="power"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="euroStandard">Euro Standard:</label>
            <input
              type="number"
              id="euroStandard"
              name="euroStandard"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="transmission">Transmission:</label>
            <input
              type="text"
              id="transmission"
              name="transmission"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mileage">Mileage:</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              id="color"
              name="color"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleInputChange}
            />
          </div>

          {Object.keys(featuresData).map((category) => (
            <div className="checkbox-groups" key={category}>
              <label>
                {category.charAt(0).toUpperCase() + category.slice(1)}:
              </label>
              {featuresData[category].map((feature, index) => (
                <div key={index} className="checkbox-group">
                  <input
                  className="checkbox"
                    type="checkbox"
                    id={`feature-${category}-${index}`}
                    name={category}
                    value={feature}
                  />
                  <label htmlFor={`feature-${category}-${index}`}>
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          ))}

          <div className="form-group full-width">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCar;
