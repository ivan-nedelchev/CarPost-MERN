import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import "./CarList.css";

const CarList = ({ cars, orientation }) => {
  const navigate = useNavigate();
  let carsClasses = "cars";
  orientation == "vertical"
    ? (carsClasses += " vertical")
    : (carsClasses += " horizontal");
  return (
    <>
      <div className="newcars-container container">
        <ul className={carsClasses}>
          {cars.length > 0 ? (
            cars.map((car, index) => (
              <CarCard key={car._id} index={index} car={car} />
            ))
          ) : (
            <>
              <h2>No cars to list. Add the first one!</h2>
            </>
          )}
        </ul>
        <div id="explore" onClick={() => navigate("/results")}>
          Explore all 23,152 car posts
        </div>
      </div>
    </>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
