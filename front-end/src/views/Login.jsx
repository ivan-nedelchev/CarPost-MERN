import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      console.log(error);

      setInvalidLogin(true);
    }
  };

  return (
    <>
      <div className="loginForm">
        <h3 style={{ padding: "20px" }}>Login Page</h3>
        <form onSubmit={loginHandler} action="/login" method="post">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">Login</button>

          {invalidLogin && (
            <div className="error-msg">
              <p>Invalid credentials.</p>
              <p>Try again</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
