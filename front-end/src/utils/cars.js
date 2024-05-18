import { get } from "./api";
import {encodeQueryParams} from './util'
const path = "/cars";

export const fetchCars = async (searchParams) => {
  if(searchParams) {
    let encodedParams = encodeQueryParams(searchParams)
    return await get(`${path}?${encodedParams}`)
  }
  let carsArray = await get(path);
  return carsArray;
};
