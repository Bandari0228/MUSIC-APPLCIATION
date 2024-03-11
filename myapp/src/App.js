import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile"
import Library from "./components/library"
import Navbar from "./components/navbar"
import Favorites from "./components/favorites"
import Aboutus from "./components/aboutus";
import UserProfile from "./components/userprofile";
function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/library" element={<Library/>} />
        <Route exact path="/navbar" element={<Navbar/>} />
        <Route exact path="/favorites" element={<Favorites/>} />
        <Route exact path="/about" element={<Aboutus/>} />    
        <Route exact path="/userprofile" element={<UserProfile/>} />    


      </Routes>

    </Router>
    </>
  );
}

export default App;
