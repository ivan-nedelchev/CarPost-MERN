import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import { fetchCars } from "../utils/cars";
import CarSearch from "./components/CarSearch";

const Home = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    let getCars = async () => {
      let carsArray = await fetchCars();
      setCars([...carsArray]);
    };
    getCars();
  }, []);
  return (
    <>
      <CarSearch setCars={setCars}></CarSearch>
      <CarList cars={cars} />
    </>
  );
};

export default Home;
