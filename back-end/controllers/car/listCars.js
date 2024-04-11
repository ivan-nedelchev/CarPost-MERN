import { listCars } from "../../services/car.js";

export async function getCars(req, res) {
    const cars = await listCars()
    res.json(cars)
}