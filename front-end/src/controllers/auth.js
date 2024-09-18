import { get } from "../utils/api";

const saveUser = (userInfo) => {
  localStorage.setItem("user", JSON.stringify(userInfo));
};
const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const deleteUser = () => {
  localStorage.removeItem("user");
};

const logoutUser = async (setAuthenticated) => {
  await get("/logout");
  deleteUser();
  setAuthenticated(false);
};

const testRegister = ({ username, password, repassword }) => {
  const errors = {};
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/
  );

  if (username.length < 5) {
    //check username for minimum length
    errors.username = "Username should have at least 5 characters.";
  }
  if (!passwordRegex.test(password)) {
    //check password with regex
    errors.password =
      "Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long.";
  }
  if (password != repassword) {
    //check if passwords match
    errors.repassword = "Passwords don't match.";
  }
  return errors;
};

export { saveUser, getUser, deleteUser, logoutUser, testRegister };
