import {
  registerController,
  loginController,
  logoutController,
} from "../controllers/auth.js";
import {
  createCarController,
  deleteCarController,
  editCarController,
  getCarsController,
  getCarController,
} from "../controllers/car.js";

export default (app) => {
  app.post("/register", registerController);
  app.post("/login", loginController);
  app.get("/logout", logoutController);
  app.post("/cars", getCarsController); //to FIX, needs to be GET with url params
  app.get("/car/:id", getCarController);
  app.post("/car", createCarController);
  app.put("/car/:id", editCarController);
  app.delete("/car/:id", deleteCarController);
};
