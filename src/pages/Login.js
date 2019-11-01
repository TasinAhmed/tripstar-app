import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logImg from "../images/login.svg";
import firebase from "../config/firebase";
import { withRouter } from "react-router-dom";

const Login = ({ history }) => {
  let key;

  const [login, setLogin] = useState({
    lEmail: "",
    lPass: ""
  });

  const [alert, setAlert] = useState({
    alert: [],
    valid: true
  });

  const changeHandler = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    let temp = [];
    key = 0;
    let valid = true;

    alert.alert.length = 0;

    if (login.lEmail === "" || login.lPass === "") {
      valid = false;
      key++;
      temp.push(<li key={key}>Fields cannot be empty</li>);
    }

    setAlert({
      alert: temp,
      valid: valid
    });

    if (valid === true) {
      await firebase.login(login.lEmail, login.lPass);
      const user = firebase.auth.currentUser;
      if (user !== null) {
        history.push("/");
      }
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
              style={!alert.valid ? {} : { display: "none" }}
              role="alert"
            >
              {alert.alert}
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

export default withRouter(Login);
