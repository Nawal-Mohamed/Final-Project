import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./CommonComponent/Navbar";
import Footer from "./CommonComponent/FooterMain";

import { useFormik } from "formik";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/Login";
import RegistrationForm from "./Pages/Register";


export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegistrationForm />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
