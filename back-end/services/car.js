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

  const {
    make,
    model,
    fuel,
    transmission,
    category,
    color,
    location,
    minPrice,
    maxPrice,
    minMileage,
    maxMileage,
    minYear,
    maxYear,
    features
  } = req.query;


  let filterCriteria = { isDeleted: false };
  if (queryParams && Object.keys(queryParams).length != 0) {
    if(queryParams.features) {
      const wantedFeatures = queryParams.features.length !=0 ? queryParams.features.split(',') : [];
      queryParams = {
        ...queryParams,
        features: { $all: wantedFeatures }
      }
    }

    filterCriteria = {
      ...filterCriteria,
      ...queryParams,
    };
  }
  console.log(filterCriteria);

  const cars = await Car.find(filterCriteria);
  return cars;
};

export const getCarService = async (carId) => {
  const car = await Car.findById(carId).where({ isDeleted: false });
  return car;
};

export const deleteCarService = async (carId, requesterId) => {
  const [car, user] = await Promise.all([
    await Car.findOneAndUpdate(
      {
        _id: carId,
        owner: requesterId,
      },
      {
        isDeleted: true,
      }
    ),
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
  return await Car.findOneAndUpdate(
    {
      _id: carId,
      owner: requesterId,
    },
    {
      ...updatedCarInfo,
    },
    { new: true }
  );
};
