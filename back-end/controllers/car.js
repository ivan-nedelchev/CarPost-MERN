import {
  getCarService,
  editCarService,
  createCarService,
  deleteCarService,
  listCarsService,
} from "../services/car.js";

export const createCarController = async (req, res) => {
  let user = JSON.parse(req.session.user);
  try {
    const newCar = {
      make: req.body.make,
      model: req.body.model,
      modification: req.body.modification,
      fuel: req.body.fuel,
      capacity: Number(req.body.capacity),
      power: Number(req.body.power),
      euroStandard: Number(req.body.euroStandard),
      transmission: req.body.transmission,
      category: req.body.category,
      mileage: Number(req.body.mileage),
      color: req.body.color,
      location: req.body.location,
      features: req.body.features,
      year: Number(req.body.year),
      description: req.body.description,
      image: req.body.image,
      price: Number(req.body.price),
      owner: user.id,
    };
    const requesterId = user.id;
    const createdCar = await createCarService(newCar, requesterId);

    if (createdCar == null) {
      throw new Error("User not found. Error creating new car.");
    }
    res.json(createdCar);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to create car." });
  }
};

export const deleteCarController = async (req, res) => {
  try {
    let requesterId = JSON.parse(req.session.user).id;
    const carId = req.params.id;
    let car = await deleteCarService(carId, requesterId);

    if (car == null) {
      throw new Error("Car not found or unauthorized request.");
    }
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to delete car." });
  }
};

export const editCarController = async (req, res) => {
  try {
    let requesterId = JSON.parse(req.session.user).id;
    let updatedCarInfo = req.body.car;
    const carId = req.params.id;
    let car = await editCarService(carId, requesterId, updatedCarInfo);

    if (car == null) {
      throw new Error("Car not found or unauthorized request.");
    }
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to edit car." });
  }
};

export const getCarController = async (req, res) => {
  try {
    const carId = req.params.id;
    let car = await getCarService(carId);

    if (car == null) {
      throw new Error("Car not found.");
    }
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to get car." });
  }
};

export const getCarsController = async (req, res) => {
  try {
    const queryParams = req.query;
    const cars = await listCarsService(queryParams);

    if (!cars || cars.length === 0) {
      throw new Error("No cars found.");
    }
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to get cars." });
  }
};
