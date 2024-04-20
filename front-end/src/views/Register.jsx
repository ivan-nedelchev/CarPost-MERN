import PropTypes from "prop-types";
import { useState } from "react";
import "./Register.css";
import { post } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../controllers/auth";
const passwordRegex = new RegExp(
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/
);

const Register = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const saveInput = (ev) => {
    const inputName = ev.target.name;
    const value = ev.target.value;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const registerUser = async (ev) => {
    ev.preventDefault();
    const errors = {};

    if (formData.username.length < 5) {
      //check username for minimum length
      errors.username = "Username should have at least 5 characters.";
    }
    if (!passwordRegex.test(formData.password)) {
      //check password with regex
      errors.password =
        "Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long.";
    }
    if (formData.password != formData.repassword) {
      //check if passwords match
      errors.repassword = "Passwords don't match.";
    }

    if (Object.keys(errors).length != 0) {
      //check for errors and display them
      setFormErrors({
        ...errors,
      });
    } else {
      let userFile = await post("/register", { ...formData });
      if (userFile) {
        saveUser(userFile);
        setAuthenticated(true);
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className="registerForm">
        <h3 style={{ padding: "20px" }}>Register Page</h3>
        <form onSubmit={registerUser} action="/register" method="post">
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
    </>
  );
};
Register.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};
export default Register;
