import { deleteCarById, getCarById } from "../../services/car.js";
export async function deleteCar(req, res) {
    let requesterId = req.session.user.id
    const carId = req.params.id;
    let car = await deleteCarById(carId, requesterId);
    res.json(car);
}
