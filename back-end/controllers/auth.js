import { registerService, loginService } from "../services/auth.js";

export async function registerController(req, res) {
  const { username, password } = req.body;
  try {
    const user = await registerService(username, password);
    if (user == null) {
      throw new Error("Username already exists");
    }
    req.session.user = JSON.stringify({ username, id: user._id });
    res.json({ username, id: user._id });
  } catch (err) {
    console.log("Error registering user:", err);
  }
}

export async function loginController(req, res) {
  const { username, password } = req.body;
  try {
    const user = await loginService(username, password);
    if (user == null) {
      res.status(401);
      res.send();
      throw new Error("Incorrect username or password");
    }
    req.session.user = JSON.stringify({ username, id: user._id });
    res.json({ username, id: user._id });
  } catch (err) {
    console.log("Error user login:", err);
  }
}

export async function logoutController(req, res) {
  req.session.destroy((err) => {
    console.log("destroying session");
    if (err) {
      console.error("Error destroying session:", err);
      res.sendStatus(500); // Server error
    } else {
      console.log("clearing cookie");
      res
        .clearCookie("connect.sid", { path: "/", domain: "localhost" })
        .sendStatus(204);
    }
  });
}
