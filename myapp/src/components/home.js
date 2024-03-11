import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CreatePlaylistPopup from "./CreatePlaylistPopup";
// import { Link } from "react-router-dom";
// faMagnifyingGlass

import {
  faDiscord,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import myImage from "../image/Screenshot 2023-10-02 192239.png";
import salaar from "../image/salaar.png";
import gunturkaaram from "../image/Guntur_Kaaram.jpg";
import master from "../image/master.jpg";
import hanuman from "../image/hanuman.jpeg";

const Homepage = () => {
  // const [darkTheme, setDarkTheme] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCreate = (playlistName) => {
    // Add code here to create the new playlist with the given name
    console.log(`Creating new playlist: ${playlistName}`);
    setPopupVisible(false);
  };

  const handleCancel = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Soundmix</div>
        <input className="search" type="search" name="Search" />
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li> <a href="/about">About Us</a> </li>
            <li
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
>
              <div className="dropdown" onClick={toggleDropdown}>
                <span>Library</span>
              </div>
              {isDropdownVisible && (
                <div className="option-list">
                  <div className="option">Playlists</div>
                  <div className="option">Artists</div>
                  <div className="option">Genres</div>
                  {/* <div className="option" > createplaylist</div> */}
                  <div className="option">
                    <button onClick={() => setPopupVisible(true)}>
                      Create Playlist
                    </button>
                    {isPopupVisible && (
                      <CreatePlaylistPopup
                        onCreate={handleCreate}
                        onCancel={handleCancel}
                      />
                    )}
                  </div>
                  <div className="option">
                    <a href="/favorites">Favorites</a>{" "}
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h4>
          Listen to <br /> new music
        </h4>
        <button className="download-button">Download</button>
        <button className="trial-button">Start Free Trial</button>

        <img id="main-image" src={myImage} alt="error" />
      </div>

      <section className="popular-music">
        <h2 className="section-title">Popular Music</h2>
        <div className="music-grid">
          <div className="music-item">
            <img src={salaar} alt="" />
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="music-item">
            <img src={gunturkaaram} alt="" srcset="" />
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="music-item">
            <img src={master} alt="" srcset="" />
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="music-item">
            <img src={hanuman} alt="" srcset="" />
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </section>

      <h2 className="head1">Contact Us</h2>
      <div className="social-icons">
        <span className="icon">
          <a href="/">
            <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
          </a>
        </span>
        <span className="icon">
          <a href="/">
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
          </a>
        </span>
        <span className="icon">
          <a href="/">
            <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
          </a>
        </span>
        <span className="icon">
          <a href="/">
            {" "}
            <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
          </a>
        </span>
        <span className="icon">
          <a href="/">
            <FontAwesomeIcon icon={faDiscord} size="3x" />
          </a>
        </span>
      </div>
    </>
  );
};

export default Homepage;
