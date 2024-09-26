import express from "express";
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
// import { checkSession } from "../utils/checkLogin.js";

export default (app) => {
  app.use(express.static("static"));
  app.post("/register", registerController);
  app.post("/login", loginController);
  app.get("/logout", logoutController);
  app.get("/cars", getCarsController);
  app.get("/car/:id", getCarController);
  app.post("/car", createCarController);
  app.put("/car/:id", editCarController);
  app.delete("/car/:id", deleteCarController);
};
