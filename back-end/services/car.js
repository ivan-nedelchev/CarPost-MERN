import Car from "../models/Car.js";
import User from "../models/User.js";

export async function createNewCar(newCar, requesterId) {
    const car = new Car(newCar);
    const user = await User.findById(requesterId);
    if (user == null) {
        return null;
    }
    user.posts.push(car._id);
    return await Promise.all([
        car.save(),
        user.save()
    ]);
}
export async function listCars(query) {
    const filterCriteria = { isDeleted: false };
    const cars = await Car.find(filterCriteria);
    return cars
}
export async function getCarById(carId) {
    const car = await Car
        .findById(carId)
        .where({ isDeleted: false })
    return car
}
export async function deleteCarById(carId, requesterId) {
    let car = await Car.findById(carId);
    let user = await User.findById(requesterId)
    if (car == null || user == null) {
        return null;
    } else if (car.owner == requesterId) {
        user.posts
            .map(post => post.toString())
            .forEach((ci, i) => {
                if (ci.includes(carId)) {
                    user.posts.splice(i, 1);
                    return;
                }
            });
        await user.save()
        return (await Car.findByIdAndUpdate(carId,
            { isDeleted: true },
            { new: true })
        )
    }
}
export async function editCarById(carId, requesterId, updatedCarInfo) {
    let car = await Car.findById(carId);
    if (car.owner == requesterId) {
        return (await Car.findByIdAndUpdate(
            carId,
            { ...updatedCarInfo },
            { new: true })
        )
    }
}