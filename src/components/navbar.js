import React, { useEffect, useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";

const Navbar = props => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
      }
    });
  });

  const logout = () => {
    firebase.logout();
    setUserState(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TripStar
        </Link>
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
              <Link className="nav-link" to="/reviews/">
                Write a Review
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/gallery/">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
          <ul
            className="navbar-nav mx-auto d-lg-none"
            style={userState !== null ? { display: "none" } : null}
          >
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/login/">
                Login
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/signup/">
                Sign Up
              </Link>
            </li>
          </ul>
          <div className="input-group navbar-search mx-auto mr-lg-2">
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
          <form
            className="form-nav form-inline"
            style={userState !== null ? { display: "none" } : null}
          >
            <Link className="btn btn-light mr-lg-2" role="button" to="/login/">
              Log In
            </Link>
            <Link
              className="btn btn-outline-primary"
              role="button"
              to="/signup/"
            >
              Sign Up
            </Link>
          </form>
          <ul
            className="navbar-nav mt-2 mt-lg-0 mb-2 mb-lg-0"
            style={
              userState !== null ? { display: "flex" } : { display: "none" }
            }
          >
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserCircle className="userIcon" />
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">
                  Account Settings
                </Link>
                <Link className="dropdown-item" to="/">
                  Reviews
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" onClick={logout}>
                  Sign Out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
