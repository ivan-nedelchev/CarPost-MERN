import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import { fetchCars } from "../utils/cars";
import CarSearch from "./components/CarSearch";
import NewCarsMsg from "./components/NewCarsMsg";
import "./Home.css";
const Home = () => {
  const [cars, setCars] = useState([]);
  const carLimit = 4;
  useEffect(() => {
    const getCars = async () => {
      const carsArray = await fetchCars({ limit: carLimit, make: "BMW" });
      setCars([...carsArray]);
      console.log(carsArray);
    };
    getCars();
  }, []);
  return (
    <>
      <CarSearch setCars={setCars}></CarSearch>
      <NewCarsMsg></NewCarsMsg>
      <CarList cars={cars} />
    </>
  );
};
export default Home;
