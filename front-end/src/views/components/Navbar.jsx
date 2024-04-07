import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { logoutUser } from '../../controllers/auth';
import { getUser } from '../../controllers/auth';
const Navbar = ({ authenticated, setAuthenticated }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    let user = getUser();
    return (
        <nav>
            <Link to="/" className='title'>
                CarPost
            </Link>
            <div
                className='menu'
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                {authenticated ? (    //logged in view
                    <>
                        <li>
                            <NavLink to="/create/car">Post Car</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => logoutUser(setAuthenticated)}>Logout</NavLink>
                        </li>
                    </>
                ) : (  //no user view
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
    )
}

export default Navbar