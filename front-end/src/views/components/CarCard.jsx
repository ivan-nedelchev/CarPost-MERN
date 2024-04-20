import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const path = "/details/";
const CarCard = ({ car }) => {
  const navigate = useNavigate();
  function handleDetailsClick(ev, id) {
    ev.preventDefault();
    navigate(path + id);
  }
  return (
    <>
      <div className="car" key={car._id}>
        <img className="carImage" src={car.image} alt="Avatar"></img>
        <div className="container">
          <h4>
            <b>{car.name}</b>
          </h4>
          <p>{car.price}</p>
          <button onClick={(ev) => handleDetailsClick(ev, car._id)}>
            Details
          </button>
        </div>
      </div>
    </>
  );
};
CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;
