import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserProgressContext } from "../../context/UserProgressContext";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const userProgressCtx = useContext(UserProgressContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    navigate("/");
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
                <Button
                  onClick={(e) => handleLogout(e)}
                  classes="underline-btn"
                >
                  Logout
                </Button>
              </a>
            </li>
          </>
        ) : (
          //Not logged in buttons
          <>
            <li>
              <Button
                onClick={userProgressCtx.showLogin}
                classes={`underline-btn`}
              >
                Login
              </Button>
            </li>
            <li>
              <Button
                onClick={userProgressCtx.showRegister}
                classes={`underline-btn`}
              >
                Register
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
