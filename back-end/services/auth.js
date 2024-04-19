import User from "../models/User.js";
import { hashSync, compareSync, genSaltSync } from "bcrypt";
const bcryptSalt = genSaltSync(10);

export async function registerService(username, password) {
  const isUserExist = await User.findOne({ username });
  const hashedPassword = hashSync(password, bcryptSalt);
  if (!isUserExist) {
    const user = new User({
      username,
      hashedPassword,
    });
    return await user.save();
  } else {
    return null;
  }
}

export async function loginService(username, password) {
  const user = await User.findOne({ username });
  if (user) {
    let comparedPassword = compareSync(password, user.hashedPassword);
    if (comparedPassword) {
      return user;
    }
  } else {
    return null;
  }
}
