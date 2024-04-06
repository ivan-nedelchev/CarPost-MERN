import React, { useState } from 'react'
import "./register.css"
import { post } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../controllers/auth';

const Register = ({setAuthenticated, authenticated}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [repass, setRepass] = useState("");
    const navigate = useNavigate();
    const registerUser = async (ev) => {
        ev.preventDefault()

        let userFile = await post('/register', {username, password})
        if(userFile) {
            console.log(userFile);
            saveUser(userFile)
            setAuthenticated(true)
            navigate('/')
        }
    }
    return (
        <>
            <div className='registerForm'>
                <h3>Register Page</h3>
                <form onSubmit={registerUser} action="/register" method="post">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={ev => setUsername(ev.target.value)}
                        required
                    />
                    <label htmlFor="password"
                    >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
                        title="Password must contain at least one number, 
                   one alphabet, one symbol, and be at 
                   least 8 characters long"
                        onChange={ev => setPassword(ev.target.value)}
                        required
                    />
                    <label htmlFor="repassword"
                    >Re-type Password:</label>
                    <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        required
                        //onChange={ev => setRepass(ev.target.value)}
                    />
                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register