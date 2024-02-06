import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile"
function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile/>} />

      </Routes>

    </Router>
    </>
  );
}

export default App;
