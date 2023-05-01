import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage.js';
import UserLogin from './pages/userLoginPage';
import UserRegister from './pages/userRegister.js';
import AdminLogin from './pages/adminLoginPage.js';
import PocViewPage from "./pages/pocViewPage.js";
import UserHomePage from "./pages/userHomePage.js";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context} from "./index";
function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/v1/users/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/userLogin" element={<UserLogin />} />
    <Route path="/userRegister" element={<UserRegister />} />
    <Route path="/adminLogin" element={<AdminLogin />} />
    <Route path="/userHomePage" element={<UserHomePage />} />
    <Route path="/pocView" element={<PocViewPage/>} />
    </Routes>
    <Toaster />
    </div>
    </BrowserRouter>
    
   
  );
}

export default App;
