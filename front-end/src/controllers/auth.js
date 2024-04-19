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
export { saveUser, getUser, deleteUser, logoutUser };
