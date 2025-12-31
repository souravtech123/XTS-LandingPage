import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import UpEvent from "./Pages/UpEvent";
import Opportunity from "./Pages/Opportunity";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<UpEvent />} />
        <Route path="/opportunities" element={<Opportunity />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </>
  );
};

export default App;
