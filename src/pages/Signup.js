import React from "react";
import { Helmet } from "react-helmet";
import signImg from "../images/signup.svg";
import "../styles/signupStyle.css";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>TripStar | Sign Up</title>
      </Helmet>
      <div className="sign-wrap container">
        <div className="signup">
          <h4>Sign Up for TripStar</h4>
          <form className="signup-form" action="">
            <input
              type="text"
              className="form-control fName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control lName"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="form-control sign-email"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control sign-password"
              placeholder="Password"
            />
            <input
              type="tel"
              className="form-control sign-phone"
              placeholder="Phone Number (Optional)"
            />
            <button type="submit" class="btn btn-primary signup-btn">
              Sign Up
            </button>
          </form>
        </div>
        <img className="sign-img img-fluid" src={signImg} alt="" />
      </div>
    </>
  );
};

export default Signup;
