/*
=========================================================
Name : LoginPage.js
Assignment : Assignment 5
Author(s) : Rayyan Ahmed, Muhammed Umar Khan
Submission : Apr 1, 2024
Description : Container component for Login and Signup forms
=========================================================
*/

import React, { useState } from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  const switchToSignup = () => {
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
  };

  return (
    <div>
      <Header />
      {isLoginView ? (
        <LoginForm switchToSignup={switchToSignup} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} />
      )}
      <Footer />
    </div>
  );
}

export default LoginPage;
