import React, { useState } from 'react';
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from './authfirebase';
import mail from "../image/email.png";
import pass from "../image/password.png";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      alert('Logged in successfully');
     
      navigate('/navbar');

    } catch (error) {
      console.log('Login error:', error);
    }
  };
  return (
    <div className="login_container" > 
      <div className="header">
        <div className="text">Login</div>
      </div>
      <form onSubmit={handleSubmit} >

      <div className="inputs">
        <div className="input">
          <img src={mail} alt="" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={pass} alt="" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="forgot">
        Forgot Password ? <span>Click here</span>
        <div className="switch">
          <Link to="/signup"> Sign Up</Link>
        </div>
      </div>

      <div className="login">
      
        <button  type="submit">Login</button>
        
      </div>
      </form>
    </div>
  );
}
export default Login;
