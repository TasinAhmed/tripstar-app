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
          <form className="login-form" action="">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
        <img className="log-img img-fluid" src={logImg} alt="" />
      </div>
    </>
  );
};

export default Login;
