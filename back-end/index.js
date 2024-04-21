import express from "express";
import expressConfig from "./configs/express.js";
import portConfig from "./configs/port.js";
import mongooseConfig from "./configs/mongoose.js";
import routesConfig from "./configs/routes.js";

const start = async () => {
  const app = express();
  await mongooseConfig();
  expressConfig(app);
  portConfig(app);
  routesConfig(app);
  console.log("APP STARTED");
};

start();
