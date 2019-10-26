import React from "react";
import { FaSearch } from "react-icons/fa";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/reviews/">
                Write a Review
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
          <div className="input-group navbar-search mx-sm-auto mr-lg-2">
            <input
              type="email"
              className="form-control"
              placeholder="Search For a Review"
              aria-label="Search For a Review"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn" type="submit" id="button-addon2">
                <FaSearch />
              </button>
            </div>
          </div>
          <form className="form-inline d-none d-lg-inline-block">
            <a className="btn btn-light mr-lg-2" role="button" href="/login/">
              Log In
            </a>
            <a
              className="btn btn-outline-primary"
              role="button"
              href="/signup/"
            >
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
