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
      <div className="search-container">
        <h1 className="home-message">
          Your
          <span className="orange-text"> dream car</span> is waiting for you.
        </h1>
        <CarSearch setCars={setCars}></CarSearch>
      </div>
      <CarList cars={cars} />
    </>
  );
};
export default Home;
