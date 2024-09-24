import PropTypes from "prop-types";
import CarCard from "./CarCard";
import "./CarList.css";

const CarList = ({ cars }) => {
  return (
    <>
      <ul className="cars">
        {cars.length > 0 ? (
          cars.map((car) => <CarCard car={car} />)
        ) : (
          <>
            <h2>No cars to list. Add the first one!</h2>
          </>
        )}
      </ul>
    </>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
