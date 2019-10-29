import React from "react";
import {
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="title brand display-4">TripStar</div>
        <div className="navigation">
          <div className="title">NAVIGATION</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reviews/">Reviews</Link>
            </li>
            <li>
              <Link to="/gallery/">Gallery</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="start">
          <div className="title">GET STARTED</div>
          <ul>
            <li>
              <Link to="/login/">Log In</Link>
            </li>
            <li>
              <Link to="/signup/">Sign Up</Link>
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
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
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
