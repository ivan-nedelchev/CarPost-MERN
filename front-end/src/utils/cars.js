import { get } from "./api";
const path = '/cars'

export async function fetchCars() {
    let carsArray = await get(path);
    return carsArray;
}