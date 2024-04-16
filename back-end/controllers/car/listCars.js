import { listCars } from "../../services/car.js";

export async function getCars(req, res) {
    const searchParams = req.body;
    const cars = await listCars(searchParams)
    res.json(cars)
}