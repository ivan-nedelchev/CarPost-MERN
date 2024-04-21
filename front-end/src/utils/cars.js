import { post } from "./api";
const path = "/cars";

export const fetchCars = async (searchParams) => {
  let carsArray = await post(path, searchParams);
  return carsArray;
};
