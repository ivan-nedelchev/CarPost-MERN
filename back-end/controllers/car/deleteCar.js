import { deleteCarById } from "../../services/car.js";
export async function deleteCar(req, res) {
    let requesterId = JSON.parse(req.session.user).id
    const carId = req.params.id;
    let car = await deleteCarById(carId, requesterId);
    res.json(car);
}
