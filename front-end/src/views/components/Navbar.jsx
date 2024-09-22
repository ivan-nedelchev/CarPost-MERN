import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
  }

  return (
    <nav>
      <Link to="/">
        <Button classes="title">CarPost</Button>
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {authenticated ? ( //logged in view
          <>
            <li>
              <NavLink to="/my-posts">
                {({ isActive }) => (
                  <Button classes={`underline-btn ${isActive ? "active" : ""}`}>
                    My Posts
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/car">
                {({ isActive }) => (
                  <Button classes={`underline-btn ${isActive ? "active" : ""}`}>
                    Add Listing
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <a href="">
                <Button onClick={() => handleLogout()} classes="underline-btn">
                  Logout
                </Button>
              </a>
            </li>
          </>
        ) : (
          //no user view
          <>
            <li>
              <NavLink to="/login">
                {({ isActive }) => (
                  <Button classes={`underline-btn ${isActive ? "active" : ""}`}>
                    Login
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                {({ isActive }) => (
                  <Button classes={`underline-btn ${isActive ? "active" : ""}`}>
                    Register
                  </Button>
                )}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
