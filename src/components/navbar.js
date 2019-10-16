import React from "react";
import "../styles/navStyle.css";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          TripStar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/reviews/">
                Reviews
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/gallery/">
                Gallery
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/contact/">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto d-lg-none">
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/login/">
                Log In
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/signup/">
                Sign Up
              </a>
            </li>
          </ul>
          <form class="form-inline d-none d-lg-inline-block">
            <a class="btn btn-light mr-lg-2" type="button" href="/login/">
              Log In
            </a>
            <a class="btn btn-outline-primary" type="button" href="/signup/">
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
