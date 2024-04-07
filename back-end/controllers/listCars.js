import { listCars } from "../services/car.js";

export async function getCars(req, res) {
    let cars = await listCars()
    res.json(cars)
}