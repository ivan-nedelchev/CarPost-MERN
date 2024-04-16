import { registerController } from "../controllers/auth/register.js";
import { loginController } from "../controllers/auth/login.js";
import { logoutController } from "../controllers/auth/logout.js";
import { isLoggedIn } from "../utils/checkLogin.js";
import { createCar } from "../controllers/car/createCar.js";
import { getCars } from "../controllers/car/listCars.js";
import { getCar } from "../controllers/car/getCar.js";
import { deleteCar } from "../controllers/car/deleteCar.js";
import { editCar } from "../controllers/car/editCar.js";
export default (app) => {
    app.post('/register', registerController);
    app.post('/login', loginController);
    app.get('/logout', logoutController);
    app.post('/cars', getCars)  //to FIX, needs to be GET with url params
    app.get('/car/:id', getCar)
    app.post('/car', createCar)
    app.put('/car/:id', editCar)
    app.delete('/car/:id', deleteCar)
}
