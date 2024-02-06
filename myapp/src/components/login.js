import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

import email from "../image/email.png";
import password from "../image/password.png";
function Login() {
  return (
    <div className="login_container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot">
        Forgot Password ? <span>Click here</span>
        <div className="switch">
          <Link to="/signup"> Sign Up</Link>
        </div>
      </div>

      <div className="login">
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}
export default Login;
