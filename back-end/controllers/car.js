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
      modification : req.body.modification,
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
    console.log(err.message);
    res.sendStatus(204);
  }
};

export const deleteCarController = async (req, res) => {
  let requesterId = JSON.parse(req.session.user).id;
  const carId = req.params.id;
  let car = await deleteCarService(carId, requesterId);
  res.json(car);
};

export const editCarController = async (req, res) => {
  let requesterId = JSON.parse(req.session.user).id;
  let updatedCarInfo = req.body.car;
  const carId = req.params.id;
  let car = await editCarService(carId, requesterId, updatedCarInfo);
  res.json(car);
};

export const getCarController = async (req, res) => {
  const carId = req.params.id;
  let car = await getCarService(carId);
  res.json(car);
};

export const getCarsController = async (req, res) => {
  const queryParams = req.query;
  const cars = await listCarsService(queryParams);
  res.json(cars);
};
