import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  "./Style/style.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <App />
 
    </React.StrictMode>
);
