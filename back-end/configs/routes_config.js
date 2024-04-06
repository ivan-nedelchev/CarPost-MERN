import { registerController } from "../controllers/register.js";
import { loginController } from "../controllers/login.js";
import { logoutController } from "../controllers/logout.js";
import { isLoggedIn } from "../utils/checkLogin.js";
export default (app) => {
    app.post('/register', registerController);
    app.post('/login', loginController);
    app.get('/logout', isLoggedIn(), logoutController);
}
