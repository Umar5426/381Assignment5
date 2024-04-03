/*
=========================================================
Name : AuthContext.js
Assignment : Assignment 5
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : April 2, 2024
Description : authentication check
=========================================================
*/

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = () => {
    localStorage.setItem('isAuthenticated', 'true'); 
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    localStorage.removeItem('isAuthenticated'); 
    setIsAuthenticated(false);
  };

  React.useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(isAuth === 'true');
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
