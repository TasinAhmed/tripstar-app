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
        </div>
        <img className="sign-img img-fluid" src={signImg} alt="" />
      </div>
    </>
  );
};

export default Signup;
