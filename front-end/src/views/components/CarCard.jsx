import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./CarCard.css";

const path = "/details/";
const CarCard = ({ car, index }) => {
  const navigate = useNavigate();
  function handleDetailsClick(ev, id) {
    ev.preventDefault();
    navigate(path + id);
  }
  function formatNumberWithSpaces(number) {
    return number.toLocaleString('en-US').replace(/,/g, ' ');
}
  const classes = index <= 1 ? "car-card" : "hidden-car car-card"; //hidden-car class for cars above 2 for responsiveness

  return (
    <>
      <li className={classes} onClick={(ev) => handleDetailsClick(ev, car._id)}>
        <img className="carImage" src={car.image} alt="car image"></img>
        <div className="carInfo">
          <p id="card-name">{car.make + " " + car.model}</p>
          <p>
            {car.year}, {car.mileage} km
          </p>
          <p className="orange-text card-price">{formatNumberWithSpaces(car.price)} лв.</p>
        </div>
      </li>
    </>
  );
};

export default CarCard;
