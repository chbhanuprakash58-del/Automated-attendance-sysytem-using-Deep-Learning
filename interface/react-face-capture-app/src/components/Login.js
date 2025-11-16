import React, { useState } from 'react';
import '../App.css'; // Ensure this path matches your file structure
import loginData from '../services/logindata.json';

    function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = loginData.users.find(
        (u) => u.username === username && u.password === password
        );
        if (user) {
        setIsAuthenticated(true);
        } else {
        alert('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
        <div className="text-block">
            <h1>Welcome!!</h1>
            <p>
            <b>Student Attendance</b>
            </p>
        </div>
        <div className="login-block">
            <h2>Sign in</h2>
            <input
            type="text"
            placeholder="ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p>Forgot password? Contact Administrator</p>
            <button onClick={handleLogin}>Log in</button>
        </div>
        </div>
    );
    }

    export default Login;
