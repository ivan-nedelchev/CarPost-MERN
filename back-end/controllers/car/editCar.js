import { editCarById } from "../../services/car.js";

export async function editCar(req, res) {
    const requesterId = JSON.parse(req.session.user).id;
    const updatedCarInfo = req.body.car;
    const carId = req.params.id;
    const car = await editCarById(carId, requesterId, updatedCarInfo);
    res.json(car);
}
