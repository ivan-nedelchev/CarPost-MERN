import User from "../models/User.js";
import { hash, compare, genSalt } from "bcrypt";

export const registerService = async (username, password) => {
  try {
    const isUserExist = await User.findOne({ username });
    if (!isUserExist) {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      const user = new User({
        username,
        hashedPassword,
      });
      return await user.save();
    } else {
      return null; // User already exists
    }
  } catch (error) {
    console.error("Error in registerService:", error);
    throw new Error("Registration failed");
  }
};

export const loginService = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordValid = await compare(password, user.hashedPassword);
      if (isPasswordValid) {
        return user;
      }
    }
    return null; // Username or password is incorrect
  } catch (error) {
    console.error("Error in loginService:", error);
    throw new Error("Login failed");
  }
};
