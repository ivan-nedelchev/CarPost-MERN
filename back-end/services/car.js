import Car from "../models/Car.js";
import User from "../models/User.js";

export const createCarService = async (newCar, requesterId) => {
  try {
    const car = new Car(newCar);
    const user = await User.findById(requesterId);
    if (user == null) {
      return null; // User not found
    }
    user.posts.push(car._id);
    await Promise.all([car.save(), user.save()]);
    return car;
  } catch (error) {
    console.error("Error in createCarService:", error);
    throw new Error("Failed to create car");
  }
};

export const listCarsService = async (queryParams) => {
  try {
    console.log(queryParams);
    const page = parseInt(queryParams.page) || 1;
    const pageSize = parseInt(queryParams.limit) || 10;
    let filterCriteria = { isDeleted: false };
    let wantedFeatures = [];

    // Check and add filters based on query parameters
    if (queryParams.make) filterCriteria.make = queryParams.make;
    if (queryParams.model) filterCriteria.model = queryParams.model;
    if (queryParams.fuel) filterCriteria.fuel = queryParams.fuel;
    if (queryParams.transmission) filterCriteria.transmission = queryParams.transmission;
    if (queryParams.category) filterCriteria.category = queryParams.category;
    if (queryParams.color) filterCriteria.color = queryParams.color;
    if (queryParams.location) filterCriteria.location = queryParams.location;

    // Price range filter
    if (queryParams.minPrice || queryParams.maxPrice) {
      filterCriteria.price = {};
      if (queryParams.minPrice) filterCriteria.price.$gte = parseFloat(queryParams.minPrice);
      if (queryParams.maxPrice) filterCriteria.price.$lte = parseFloat(queryParams.maxPrice);
    }

    // Mileage range filter
    if (queryParams.minMileage || queryParams.maxMileage) {
      filterCriteria.mileage = {};
      if (queryParams.minMileage) filterCriteria.mileage.$gte = parseFloat(queryParams.minMileage);
      if (queryParams.maxMileage) filterCriteria.mileage.$lte = parseFloat(queryParams.maxMileage);
    }

    // Year range filter
    if (queryParams.minYear || queryParams.maxYear) {
      filterCriteria.year = {};
      if (queryParams.minYear) filterCriteria.year.$gte = parseInt(queryParams.minYear);
      if (queryParams.maxYear) filterCriteria.year.$lte = parseInt(queryParams.maxYear);
    }

    // Handle features filter
    if (queryParams.features) {
      wantedFeatures = queryParams.features.split(",");
      if (wantedFeatures.length > 0) {
        filterCriteria.features = { $all: wantedFeatures };
      }
    }

    console.log(filterCriteria);
    const cars = await Car.find(filterCriteria)
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return cars;
  } catch (error) {
    console.error("Error in listCarsService:", error);
    throw new Error("Failed to list cars");
  }
};

export const getCarService = async (carId) => {
  try {
    const car = await Car.findById(carId).where({ isDeleted: false });
    return car;
  } catch (error) {
    console.error("Error in getCarService:", error);
    throw new Error("Failed to get car details");
  }
};

export const deleteCarService = async (carId, requesterId) => {
  try {
    const [car, user] = await Promise.all([
      Car.findOneAndUpdate({ _id: carId, owner: requesterId }, { isDeleted: true }),
      User.findById(requesterId),
    ]);

    if (car == null || user == null) {
      return null; // Car or user not found
    }

    user.posts = user.posts.filter((p) => p.toString() !== carId);
    await user.save();
    return car;
  } catch (error) {
    console.error("Error in deleteCarService:", error);
    throw new Error("Failed to delete car");
  }
};

export const editCarService = async (carId, requesterId, updatedCarInfo) => {
  try {
    const car = await Car.findOneAndUpdate(
      { _id: carId, owner: requesterId },
      updatedCarInfo,
      { new: true }
    );
    return car;
  } catch (error) {
    console.error("Error in editCarService:", error);
    throw new Error("Failed to edit car");
  }
};
