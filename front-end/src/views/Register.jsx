import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { testRegister } from "../controllers/auth";
import { UserProgressContext } from "../context/UserProgressContext";
import Modal from "./components/Modal";

import "./Register.css";

const Register = () => {
  const { register } = useContext(AuthContext);
  const userProgressCtx = useContext(UserProgressContext);

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repassword: "",
  });
  const saveInput = (ev) => {
    const inputName = ev.target.name;
    const value = ev.target.value.trim();
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const errors = testRegister(formData);
    if (Object.keys(errors).length > 0) {
      //checks if the register information matches the criteria
      setFormErrors({
        ...errors,
      });
      return;
    }
    try {
      await register(formData);
      userProgressCtx.hideRegister();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {userProgressCtx.progress == "register" && (
        <Modal
          open={userProgressCtx.progress == "register"}
          onClose={userProgressCtx.hideRegister}
        >
          <div className="registerForm">
            <h3 style={{ padding: "20px" }}>Register Page</h3>
            <form onSubmit={handleRegister} action="/register" method="post">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={saveInput}
                required
              />
              {formErrors.username && (
                <div className="error-msg">{formErrors.username}</div>
              )}
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={saveInput}
                required
              />
              {formErrors.password && (
                <div className="error-msg">{formErrors.password}</div>
              )}
              <label htmlFor="repassword">Repeat Password:</label>

              <input
                type="password"
                id="repassword"
                name="repassword"
                required
                onChange={saveInput}
              />
              {formErrors.repassword && (
                <div className="error-msg">{formErrors.repassword}</div>
              )}
              <button type="submit">Register</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Register;
