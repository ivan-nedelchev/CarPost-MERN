import { registerService, loginService } from "../services/auth.js";

export const registerController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await registerService(username, password);
    if (user == null) {
      // Return 409 Conflict if the username already exists
      res.status(409).json({ error: "Username already exists" });
      return; // Stop execution
    }
    req.session.user = JSON.stringify({ username, id: user._id });
    res.status(201).json({ username, id: user._id }); // Respond with 201 Created
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" }); // Standardized error response
  }
};

export const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await loginService(username, password);
    if (user == null) {
      res.status(401).json({ error: "Incorrect username or password" }); // Send meaningful error
      return; // Stop execution
    }
    req.session.user = JSON.stringify({ username, id: user._id });
    res.status(200).json({ username, id: user._id });
  } catch (err) {
    console.error("Error user login:", err);
    res.status(500).json({ error: "Internal server error" }); // Standardized error response
  }
};

export const logoutController = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ error: "Failed to log out" });
    } else {
      res.clearCookie("connect.sid", { path: "/", domain: "localhost" })
         .status(204).send(); // Respond with 204 No Content
    }
  });
};
