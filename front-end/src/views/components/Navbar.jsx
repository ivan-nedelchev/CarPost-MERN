import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
              <NavLink onClick={() => handleLogout()}>Logout</NavLink>
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
export default Navbar;
