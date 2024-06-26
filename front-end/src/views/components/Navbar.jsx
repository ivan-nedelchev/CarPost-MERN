import PropTypes from "prop-types";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { logoutUser } from "../../controllers/auth";

const Navbar = ({ authenticated, setAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout(setAuthenticated) {
    await logoutUser(setAuthenticated);
    navigate("/");
  }
  return (
    <nav>
      <Link to="/" className="title">
        CarPost
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
              <NavLink to="/my-posts">My Posts</NavLink>
            </li>
            <li>
              <NavLink to="/create/car">Post a Car</NavLink>
            </li>
            <li>
              <NavLink onClick={() => handleLogout(setAuthenticated)}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          //no user view
          <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default Navbar;
