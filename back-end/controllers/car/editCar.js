import { editCarById } from "../../services/car.js";

export async function editCar(req, res) {
    let requesterId = JSON.parse(req.session.user).id;
    let updatedCarInfo = req.body.car;
    const carId = req.params.id;
    let car = await editCarById(carId, requesterId, updatedCarInfo);
    res.json(car);
}
