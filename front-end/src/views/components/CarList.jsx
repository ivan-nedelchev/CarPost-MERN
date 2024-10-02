import PropTypes from "prop-types";
import CarCard from "./CarCard";
import "./CarList.css";

const CarList = ({ cars }) => {
  return (
    <>
      <div className="newcars-container container">
        <ul className="cars">
          {cars.length > 0 ? (
            cars.map((car, index) => <CarCard index={index} car={car} />)
          ) : (
            <>
              <h2>No cars to list. Add the first one!</h2>
            </>
          )}
        </ul>
        <div id="explore">Explore all 23,152 car posts</div>
      </div>
    </>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
