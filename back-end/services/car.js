import Car from "../models/Car.js";
import User from "../models/User.js";

export const createCarService = async (newCar, requesterId) => {
  const car = new Car(newCar);
  const user = await User.findById(requesterId);
  if (user == null) {
    return null;
  }
  user.posts.push(car._id);
  return await Promise.all([car.save(), user.save()]);
};

export const listCarsService = async (queryParams) => {
  let filterCriteria = { isDeleted: false };
  if (queryParams && Object.keys(queryParams).length != 0) {
    filterCriteria = {
      ...filterCriteria,
      ...queryParams,
    };
  }

  const cars = await Car.find(filterCriteria);
  return cars;
};

export const getCarService = async (carId) => {
  const car = await Car.findById(carId).where({ isDeleted: false });
  return car;
};

export const deleteCarService = async (carId, requesterId) => {
  const [car, user] = await Promise.all([
    await Car.findByIdAndUpdate(carId, {
      isDeleted: true,
      owner: requesterId,
    }),
    await User.findById(requesterId),
  ]);
  if (car == null || user == null) {
    return null;
  }
  user.posts
    .map((p) => p.toString())
    .forEach((ci, i) => {
      if (ci.includes(carId)) {
        user.posts.splice(i, 1);
        return;
      }
    });
  return await Promise.all([await car.save(), await user.save()]);
};

export const editCarService = async (carId, requesterId, updatedCarInfo) => {
  let car = await Car.findById(carId);
  if (car.owner == requesterId) {
    return await Car.findByIdAndUpdate(
      carId,
      { ...updatedCarInfo },
      { new: true }
    );
  }
};
