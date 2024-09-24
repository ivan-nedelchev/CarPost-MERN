import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./CarCard.css";

const path = "/details/";
const CarCard = ({ car }) => {
  const navigate = useNavigate();
  function handleDetailsClick(ev, id) {
    ev.preventDefault();
    navigate(path + id);
  }
  return (
    <>
      <li
        className="car card"
        key={car._id}
        onClick={(ev) => handleDetailsClick(ev, car._id)}
      >
        <img className="carImage" src={car.image} alt="Avatar"></img>
        <div className="carInfo">
          <h4>
            <b>{car.make + " " + car.model}</b>
          </h4>
          <p>{car.price} лв.</p>
          <Button onClick={(ev) => handleDetailsClick(ev, car._id)}>
            Details
          </Button>
        </div>
      </li>
    </>
  );
};
CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;
