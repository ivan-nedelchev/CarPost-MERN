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
      <CarSearch setCars={setCars}></CarSearch>
      <h3>Newest car listings</h3>
      <CarList cars={cars} />
    </>
  );
};
export default Home;
