import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";
import { faDiscord, faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import "./home.css";
import myImage from '../image/Screenshot 2023-10-02 192239.png';


const Homepage = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <nav className={`navbar ${darkTheme ? 'navbar-dark' : ''}`}>
        <div className="logo">
          <span>Music App</span>
        </div>
        <div className="nav-links">
          <ul>
            <input type="search" name='Search' />
            <li><a href="/" id='Search' aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Explore</a></li>
            <li><a href="/">Library</a></li>
            {/* <Link to="/profile">profile</Link> */}

            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        



      </nav>

      <div className={`container ${darkTheme ? 'container-dark' : ''}`}>
        <h4>Listen to <br /> new music </h4>
        <button className="download-button">Download</button>
        <button className="trial-button">Start Free Trial</button>
       
        <img src={myImage} alt="error" />
      </div>

      <section className="popular-music">
        <h2 className="section-title">Popular Music</h2>
        <div className="music-grid">
          <div className="music-item">
            <button className="play-button">Play</button>
          </div>
          <div className="music-item">
            <button className="play-button">Play</button>
          </div>
          <div className="music-item">
            <button className="play-button">Play</button>
          </div>
          <div className="music-item">
            <button className="play-button">Play</button>
          </div>
        </div>
      </section>

      <h2 className='head1'>Contact Us</h2>
      <div className="social-icons">
        <span className="icon">
          <a href="/"><FontAwesomeIcon icon={faFacebookSquare} size="3x" /></a>
        </span>
        <span className="icon">
          <a href="/"><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></a>
        </span>
        <span className="icon">
          <a href="/"><FontAwesomeIcon icon={faYoutubeSquare} size="3x" /></a>
        </span>
        <span className="icon">
          <a href="/"> <FontAwesomeIcon icon={faInstagramSquare} size="3x" /></a>
        </span>
        <span className="icon">
          <a href="/"><FontAwesomeIcon icon={faDiscord} size="3x" /></a>
        </span>
      </div>

      <footer className={`footer ${darkTheme ? 'footer-dark' : ''}`}>
        <div className="footer-links">
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Music App. All rights reserved.</p>
        </div>
        <button className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </footer>
    </>
  );
};

export default Homepage;

