import { deleteCarById } from "../../services/car.js";
export async function deleteCar(req, res) {
    const requesterId = JSON.parse(req.session.user).id
    const carId = req.params.id;
    const car = await deleteCarById(carId, requesterId);
    res.json(car);
}
