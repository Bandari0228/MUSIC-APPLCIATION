import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import user from "../image/person.png";
import email from "../image/email.png";
import password from "../image/password.png";
function signup() {
  return (
    <div className="login_container">
      <div className="header">
        <div className="text"> Sign Up</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>{" "}
      </div>
      <div className="switchlogin">
       <Link to="/login">Login</Link>
      </div>
         <div className="signup">
      <button>
      <Link to="/signup"> Sign Up</Link>
      </button>
      </div>
    </div>
  );
}
export default signup;
