import { useState } from "react";
import "./CreateCar.css";
import { post } from "../utils/api";
import { useNavigate } from "react-router-dom";
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
    console.log(formData);
    let carObject = await post(path, {
      make: formData.make,
      model: formData.model,
      modification : formData.modification,
      year: Number(formData.year),
      description : formData.description,
      image : formData.image,
      price: Number(formData.price),
    });
    if (carObject) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="car-form">
        <h1>Post a car</h1>
        <form onSubmit={createCar} action="/create/car" method="post">
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="modification">Modification:</label>
          <input
            type="text"
            id="modification"
            name="modification"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default CreateCar;
