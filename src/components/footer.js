import React from "react";
import {
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="title brand display-4">TripStar</div>
        <div className="navigation">
          <div className="title">NAVIGATION</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/reviews/">Reviews</a>
            </li>
            <li>
              <a href="/gallery/">Gallery</a>
            </li>
            <li>
              <a href="/contact/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="start">
          <div className="title">GET STARTED</div>
          <ul>
            <li>
              <a href="/login/">Log In</a>
            </li>
            <li>
              <a href="/signup/">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <div className="title">SIGN UP FOR OUR NEWSLETTER</div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn" type="submit" id="button-addon2">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="title">FIND US ON SOCIAL MEDIA</div>
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright">
          &copy;2019 TripStar All Rights Reserved. Designed by{" "}
          <span className="name">Tasin Ahmed</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
