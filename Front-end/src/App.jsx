import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import RegistrationForm from "./Pages/Register";
import About from "./Pages/About";
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
