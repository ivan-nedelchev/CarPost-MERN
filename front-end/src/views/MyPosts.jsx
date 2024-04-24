import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import { fetchCars } from "../utils/cars";
import { getUser } from "../controllers/auth";

const MyPosts = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getUserCars = async () => {
      const user = getUser();
      const searchParams = {owner: user.id}
      const carsArray = await fetchCars(searchParams);
      setCars([...carsArray]);
    };
    getUserCars();
  }, []);
  return (
    <>
      <h3>Your car posts</h3>
      <CarList cars={cars} />
    </>
  );
};

export default MyPosts;
