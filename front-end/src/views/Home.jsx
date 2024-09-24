import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import { fetchCars } from "../utils/cars";
import CarSearch from "./components/CarSearch";
import "./Home.css";
const Home = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
      const carsArray = await fetchCars();
      setCars([...carsArray]);
    };
    getCars();
  }, []);
  return (
    <>
        <div className="picture-container container">
          <div className="search-section">
            <h1 className="home-message">
              Your
              <span className="orange-text"> dream car </span>
              is waiting for you.
            </h1>
            <CarSearch setCars={setCars}></CarSearch>
          </div>
        </div>
        <div className="newcars-container container">
          <h3>Newest car listings</h3>
          <CarList cars={cars} />
        </div>
    </>
  );
};
export default Home;
