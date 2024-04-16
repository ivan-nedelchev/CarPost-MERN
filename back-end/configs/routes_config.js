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
    app.post('/create/car', createCar)
    app.get('/logout', logoutController);
    app.post('/cars', getCars)
    app.get('/cars/:id', getCar)
    app.get('/cars/delete/:id', deleteCar)
    app.post('/cars/delete/:id', editCar)
}
