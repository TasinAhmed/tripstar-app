import React, { useState } from "react";
import { Helmet } from "react-helmet";
import signImg from "../images/signup.svg";

const Signup = () => {
  let key = 0;

  const [signup, setSignup] = useState({
    sfName: "",
    slName: "",
    sEmail: "",
    sPass: "",
    sPhone: "",
    alert: []
  });

  const [valid, setValid] = useState({
    valid: true
  });

  const changeHandler = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    let temp = [];

    signup.alert.length = 0;

    if (
      !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
        signup.sPass
      )
    ) {
      setValid({ valid: false });
      key++;
      temp.push(<li key={key}>Password Empty</li>);
    } else {
      setValid({ valid: true });
    }

    if (signup.sEmail === "") {
      setValid({ valid: false });
      key++;
      temp.push(<li key={key}>Email Empty</li>);
    } else {
      setValid({ valid: true });
    }

    setSignup({
      ...signup,
      alert: temp
    });
  };

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
              required
              name="sfName"
              onChange={changeHandler}
            />
            <input
              type="text"
              className="form-control lName"
              placeholder="Last Name"
              required
              name="slName"
              onChange={changeHandler}
            />
            <input
              type="email"
              className="form-control sign-email"
              placeholder="Email"
              required
              name="sEmail"
              onChange={changeHandler}
            />
            <input
              type="password"
              className="form-control sign-password"
              placeholder="Password"
              required
              name="sPass"
              onChange={changeHandler}
            />
            <input
              type="tel"
              className="form-control sign-phone"
              placeholder="Phone Number (Optional)"
              name="sPhone"
              onChange={changeHandler}
            />
            <div
              className="alert alert-danger"
              role="alert"
              style={!valid.valid ? {} : { display: "none" }}
            >
              {signup.alert}
            </div>
            <button
              type="submit"
              className="btn btn-primary signup-btn"
              onClick={onSubmit}
            >
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
