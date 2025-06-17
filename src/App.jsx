// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// الصفحات
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// مكونات الواجهة
import Footer from "./CommonComponent/FooterMain";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">

                {/* ✅ Navbar بسيط باستخدام Link */}
                <nav className="bg-gray-100 shadow px-4 py-2 flex gap-4">
                    <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
                    <Link to="/about" className="text-blue-600 hover:underline">About</Link>
                    <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                    <Link to="/shop" className="text-blue-600 hover:underline">Shop</Link>
                    <Link to="/login" className="text-blue-600 hover:underline ml-auto">Login</Link>
                    <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                </nav>

                {/* ✅ المسارات */}
                <main className="flex-grow p-4">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}
