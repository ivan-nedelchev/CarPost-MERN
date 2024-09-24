import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./CarCard.css";

const path = "/details/";
const CarCard = ({ car, index }) => {
  const navigate = useNavigate();
  function handleDetailsClick(ev, id) {
    ev.preventDefault();
    navigate(path + id);
  }
  const classes = index <= 1 ? "car card" : "hidden-car car card";

  return (
    <>
      <li
        className={classes}
        key={car._id}
        onClick={(ev) => handleDetailsClick(ev, car._id)}
      >
        <img className="carImage" src={car.image} alt="Avatar"></img>
        <div className="carInfo">
          <h4 className="wide">
            <b>{car.make + " " + car.model}</b>
          </h4>
          <div>{car.year}</div>
          <div>{car.year}</div>
          <div>{car.year}</div>
          <div>{car.year}</div>
          <p className="wide">{car.price} лв.</p>
        </div>
      </li>
    </>
  );
};
CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;
