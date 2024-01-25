import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/index.scss";
import Page2 from "./Page2.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
