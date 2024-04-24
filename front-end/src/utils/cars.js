import { get } from "./api";
import {encodeQueryParams} from './utils'
const path = "/cars";

export const fetchCars = async (searchParams) => {
  if(searchParams) {
    console.log(searchParams);
    let encodedParams = encodeQueryParams(searchParams)
    return await get(`${path}?${encodedParams}`)
  }
  let carsArray = await get(path);
  return carsArray;
};
