import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; 
import Layout from "../frontend/src/components/Layout.js";
 // <-- import your layout
import Dashboard from "../frontend/src/pages/Dashboard.js";
import Profile from "../frontend/src/pages/Profile.js";
import Browse from "../frontend/src/pages/Browse.js";
import Applications from "../frontend/src/pages/Applications.jsx";
import Companies from "../frontend/src/pages/Companies.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all the pages */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/companies" element={<Companies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
