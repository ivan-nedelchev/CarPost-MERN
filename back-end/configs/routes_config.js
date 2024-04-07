import { registerController } from "../controllers/register.js";
import { loginController } from "../controllers/login.js";
import { logoutController } from "../controllers/logout.js";
import { isLoggedIn } from "../utils/checkLogin.js";
import { createCar } from "../controllers/createCar.js";
import { getCars } from "../controllers/listCars.js";
export default (app) => {
    app.post('/register', registerController);
    app.post('/login', loginController);
    app.get('/logout', isLoggedIn(), logoutController);
    app.post('/create/car', createCar)
    app.get('/cars', getCars)
}
