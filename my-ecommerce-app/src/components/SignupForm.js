/*
=========================================================
Name : SignupForm.js
Assignment : Assignment 5
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Apr 1, 2024
Description : Signup Form component for my-ecommerce-app
=========================================================
*/

import React, { useState } from 'react';

function SignupForm({ switchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Add validation for password match
    if (password !== confirmPassword) {
      console.error("Passwords don't match.");
      // Here you can set an error state and show an error message to the user
      return;
    }

    // Replace the following with your signup validation and API call logic
    if (username && password && email) {
      console.log('Attempting signup with:', username, email, password);
      // Call your API or perform further validation here
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? 
        <button type="button" onClick={switchToLogin}>
          Login
        </button>
      </p>
    </div>
  );
}

export default SignupForm;
