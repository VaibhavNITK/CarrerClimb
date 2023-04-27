import React from 'react';

import '../styles/LandingPage.css';

function LandingPage() {
    
  return (
    
    <div className="landing-page">
      <nav className="navbar">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className="buttons">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </nav>
      <div className="content">
        {/* <h1 className="title">Welcome to Career Development Website</h1>
        <p className="description">Explore various career options and find the right path for you</p> */}
        {/* <button className="cta-button">Get Started</button> */}
      </div>
      <footer className="footer">
        &copy; 2023 Career Development Website
      </footer>
    </div>
  );
}

export default LandingPage;
