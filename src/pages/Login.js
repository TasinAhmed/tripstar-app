import React from "react";
import { Helmet } from "react-helmet";
import logImg from "../images/login.svg";
import "../styles/loginStyle.css";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>TripStar | Log In</title>
      </Helmet>
      <div className="log-wrap container">
        <div className="login">
          <h4>Log In to TripStar</h4>
        </div>
        <img className="log-img img-fluid" src={logImg} alt="" />
      </div>
    </>
  );
};

export default Login;
