import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  async function handleLogout() {
    await logout();
  }

  return (
    <nav className="container">
      <div className="mobile-nav-visible">
        <Link to="/">
          <Button classes="site-title">CarPost</Button>
        </Link>
        <div //menu for mobile view
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul
        className={menuOpen ? "open" : ""}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {authenticated ? ( //logged in nav buttons
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
          //Not logged in buttons
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
