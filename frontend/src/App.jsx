import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import SignUp from './Components/SignUp.jsx';
import NavBar from "./NavBar.jsx";
import Food from "./Components/Food.jsx";
import Store from "./Components/Store.jsx";
import MyProfile from "./Components/MyProfile.jsx";

function AppWrapper() {
  const location = useLocation();

  // Hide the NavBar on login and signup pages
  const hideNavBar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavBar && <NavBar />} {/* Conditionally render NavBar */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/home" />} /> {/* Default redirect to Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
