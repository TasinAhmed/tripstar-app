import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logImg from "../images/login.svg";

const Login = () => {
  const [login, setLogin] = useState({
    lEmail: "",
    lPass: ""
  });

  const [valid, setValid] = useState({
    valid: true
  });

  const changeHandler = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    if (login.lEmail === "") {
      setValid({ valid: false });
    } else {
      setValid({ valid: true });
    }
  };

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
              name="lEmail"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
              onChange={changeHandler}
            ></input>
            <input
              type="password"
              name="lPass"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              onChange={changeHandler}
            ></input>
            <div
              className="alert alert-danger"
              style={!valid.valid ? {} : { display: "none" }}
              role="alert"
            >
              A simple danger alert—check it out!
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}
            >
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
