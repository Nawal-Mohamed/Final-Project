import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./CommonComponent/Navbar";
import Footer from "./CommonComponent/FooterMain";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";

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
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
