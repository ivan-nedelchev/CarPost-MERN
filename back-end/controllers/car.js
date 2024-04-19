import {
  getCarService,
  editCarService,
  createCarService,
  deleteCarService,
  listCarsService,
} from "../services/car.js";

export async function createCarController(req, res) {
  let user = JSON.parse(req.session.user);
  try {
    const newCar = {
      name: req.body.name,
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
}

export async function deleteCarController(req, res) {
  let requesterId = JSON.parse(req.session.user).id;
  const carId = req.params.id;
  let car = await deleteCarService(carId, requesterId);
  res.json(car);
}

export async function editCarController(req, res) {
  let requesterId = JSON.parse(req.session.user).id;
  let updatedCarInfo = req.body.car;
  const carId = req.params.id;
  let car = await editCarService(carId, requesterId, updatedCarInfo);
  res.json(car);
}

export async function getCarController(req, res) {
  const carId = req.params.id;
  let car = await getCarService(carId);
  res.json(car);
}

export async function getCarsController(req, res) {
  const searchParams = req.body;
  const cars = await listCarsService(searchParams);
  res.json(cars);
}
