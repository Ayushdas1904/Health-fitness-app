import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import SignUp from './SignUp.jsx';
import NavBar from "./NavBar.jsx";
import Food from "./Food.jsx";
import Store from "./Store.jsx";
import MyProfile from "./MyProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Include the NavBar in all pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/home" />} /> {/* Default redirect to Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
