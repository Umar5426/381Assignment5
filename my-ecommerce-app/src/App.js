/*
=========================================================
Name : App.js
Assignment : Assignment 4
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Mar 24, 2024
Description : App file for my-ecommerce-app
=========================================================
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/ProductPage';
import LoginPage from './components/LoginPage'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
