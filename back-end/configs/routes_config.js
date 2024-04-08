import { registerController } from "../controllers/register.js";
import { loginController } from "../controllers/login.js";
import { logoutController } from "../controllers/logout.js";
import { isLoggedIn } from "../utils/checkLogin.js";
import { createCar } from "../controllers/createCar.js";
import { getCars } from "../controllers/listCars.js";
import { getCar } from "../controllers/getCar.js";
import { deleteCar } from "../controllers/deleteCar.js";
export default (app) => {
    app.post('/register', registerController);
    app.post('/login', loginController);
    app.get('/logout', isLoggedIn(), logoutController);
    app.post('/create/car', createCar)
    app.get('/cars', getCars)
    app.get('/cars/:id', getCar)
    app.get('/cars/delete/:id', deleteCar)
}
