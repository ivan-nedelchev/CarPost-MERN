import Car from "../models/Car.js";
import User from "../models/User.js";

export async function createNewCar(newCar, requesterId) {
    console.log(newCar, requesterId);
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