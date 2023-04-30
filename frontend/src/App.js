import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage.js';
import UserLogin from './pages/userLoginPage';
import UserRegister from './pages/userRegister.js';
import AdminLogin from './pages/adminLoginPage.js';
import UserNavbar from "./pages/userNavbar.js";
import UserHomePage from "./pages/userHomePage.js";
function App() {
  return (
    // <BrowserRouter>
    // <div className="App">
    // <Routes>
    // <Route path="/" element={<LandingPage />} />
    // <Route path="/userLogin" element={<UserLogin />} />
    // <Route path="/userRegister" element={<UserRegister />} />
    // <Route path="/adminLogin" element={<AdminLogin />} />
    
    
    // </Routes>
    // </div>
    // </BrowserRouter>
    // <UserNavbar />
    <UserHomePage />
  );
}

export default App;
