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
  console.log(queryParams);

  const page = parseInt(queryParams.page) || 1;
  const pageSize = parseInt(queryParams.limit) || 10;
  let filterCriteria = { isDeleted: false };
  let wantedFeatures = [];
  // Manually check each allowed query parameter
  if (queryParams.make) wantedFeatures.push({ make: queryParams.make });
  if (queryParams.model) wantedFeatures.push(queryParams.model);
  console.log(wantedFeatures);

  // if (queryParams.fuel) wantedFeatures.fuel = queryParams.fuel;
  // if (queryParams.transmission)
  //   wantedFeatures.transmission = queryParams.transmission;
  // if (queryParams.category) wantedFeatures.category = queryParams.category;
  // if (queryParams.color) wantedFeatures.color = queryParams.color;
  // if (queryParams.location) wantedFeatures.location = queryParams.location;

  // // Handle price range
  // if (queryParams.minPrice || queryParams.maxPrice) {
  //   wantedFeatures.price = {};
  //   if (queryParams.minPrice)
  //     wantedFeatures.price.$gte = parseFloat(queryParams.minPrice);
  //   if (queryParams.maxPrice)
  //     wantedFeatures.price.$lte = parseFloat(queryParams.maxPrice);
  // }

  // // Handle mileage range
  // if (queryParams.minMileage || queryParams.maxMileage) {
  //   wantedFeatures.mileage = {};
  //   if (queryParams.minMileage)
  //     wantedFeatures.mileage.$gte = parseFloat(queryParams.minMileage);
  //   if (queryParams.maxMileage)
  //     wantedFeatures.mileage.$lte = parseFloat(queryParams.maxMileage);
  // }

  // // Handle year range
  // if (queryParams.minYear || queryParams.maxYear) {
  //   wantedFeatures.year = {};
  //   if (queryParams.minYear)
  //     wantedFeatures.year.$gte = parseInt(queryParams.minYear);
  //   if (queryParams.maxYear)
  //     wantedFeatures.year.$lte = parseInt(queryParams.maxYear);
  // }

  // // if (queryParams && Object.keys(queryParams).length != 0) {
  // //   if (queryParams.features) {
  // //     const wantedFeatures =
  // //       queryParams.features.length != 0 ? queryParams.features.split(",") : [];
  // //     queryParams = {
  // //       ...queryParams,
  // //       features: { $all: wantedFeatures },
  // //     };
  // //   }
  // // }
  // if (Object.keys(wantedFeatures).length > 0) {
  //   filterCriteria.features = { $all: wantedFeatures };
  // }
  // console.log(filterCriteria);

  // const cars = await Car.find(filterCriteria)
  //   .skip((page - 1) * pageSize)
  //   .limit(pageSize);

  // return cars;
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
