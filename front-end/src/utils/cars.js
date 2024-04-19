import { post } from "./api";
const path = "/cars";

export async function fetchCars(searchParams) {
  let carsArray = await post(path, searchParams);
  return carsArray;
}
