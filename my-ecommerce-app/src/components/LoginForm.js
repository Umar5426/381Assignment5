/*
=========================================================
Name : LoginForm.js
Assignment : Assignment 5
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Apr 1, 2024
Description : Login Form component for my-ecommerce-app
=========================================================
*/

import React, { useState } from 'react';

function LoginForm({ switchToSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (validate inputs, send request, etc.)
    console.log('Login clicked');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={switchToSignup}>Signup</button></p>
    </div>
  );
}

export default LoginForm;