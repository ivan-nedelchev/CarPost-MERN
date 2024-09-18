import { createContext, useState, useEffect } from "react";
import { get, post } from "../utils/api";
import { saveUser } from "../controllers/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on initial render
    setAuthenticated(localStorage.getItem("user") !== null);
  }, []);

  const register = async (formData) => {
    try {
      const response = await post("/register", { ...formData });
      if (!response) {
        console.log(response);

        throw new Error(); //fix later
      }
      saveUser(response);
      setAuthenticated(true);
    } catch (error) {
      throw new Error(error.message || "Registration failed");
    }
  };

  const login = async (username, password) => {
    try {
      const response = await post("/login", { username, password });
      if (response.status == 401) {
        throw new Error("Invalid login");
      }
      saveUser(response);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);

      throw new Error("Login failed");
    }
  };

  const logout = async () => {
    console.log("removed");
    localStorage.removeItem("user");

    await get("/logout");
    setAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ authenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
