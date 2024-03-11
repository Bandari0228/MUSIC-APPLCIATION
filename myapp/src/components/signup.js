import React, { useState } from "react";
import "./signup.css";

import { Link } from "react-router-dom";
import user from "../image/person.png";
import email from "../image/email.png";
import pass from "../image/password.png";
import { auth, createUserWithEmailAndPassword } from "./authfirebase";

function Signup() {
  const [name, setName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      const user = userCredential.user;
      console.log("Signed up user:", user);
      alert("Signed up successfully");
  
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <div className="login_container">
      <div className="header">
        <div className="text"> Sign Up</div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={user} alt="" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={pass} alt="" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="switchlogin">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
        <div className="signup">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
