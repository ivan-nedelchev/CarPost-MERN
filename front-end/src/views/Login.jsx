import React, { useState } from 'react';
import './Login.css';
import { saveUser } from '../controllers/auth';
import { useNavigate } from 'react-router-dom';
import { post } from '../utils/api';

const Login = ({ setAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault();
        let res = await post('/login', { username, password });
        if (res.status != 401 && res.username) {
            saveUser(res);
            setAuthenticated(true);
            console.log("Successful login");
            navigate('/');
        } else {
            console.log("Invalid credentials, try again");
        }
    }
    return (
        <>
            <div className='loginForm'>
                <h3>Login Page</h3>
                <form onSubmit={loginHandler} action="/login" method="post">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={ev => setUsername(ev.target.value)}
                    />
                    <label htmlFor="password"
                    >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={ev => setPassword(ev.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;