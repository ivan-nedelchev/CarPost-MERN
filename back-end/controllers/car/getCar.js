import { getCarById } from "../../services/car.js"
export async function getCar(req, res) {
    const carId = req.params.id;
    const car = await getCarById(carId);
    res.json(car);
}
