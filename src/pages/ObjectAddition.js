import React, { useState } from "react";
import { Helmet } from "react-helmet";
import signImg from "../images/signup.svg";
import firebase from "../config/firebase";

const ObjectAdd = () => {
  let key;

  const [ObjectAdd, setObjectAdd] = useState({
    obName: "",
    obCoordinates: "",
	  obDesc = ""
  });

  const [alert, setAlert] = useState({
    alert: [],
    valid: true
  });

  const changeHandler = e => {
    setSignup({
      ...ObjectAdd,
      [e.target.name]: e.target.value
    });
  };

  const onAdd = e => {
    e.preventDefault();
    let temp = [];
    key = 0;
    let valid = true;

    alert.alert.length = 0;

    if (
      ObjectAdd.obName === "" ||
      ObjectAdd.obCoordinates === ""||
      ObjectAdd.obDesc === ""
    ) {
      valid = false;
      key++;
      temp.push(<li key={key}>Fields cannot be empty</li>);
    }


    setAlert({
      alert: temp,
      valid: valid
    });

    if (valid === true) {
      register(ObjectAdd.obName, ObjectAdd.obCoordinates, ObjectAdd.obDesc);;
    }
  };

  const register = async (Name, Address) => {
    await firebase.register(Name, Address);
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
              style={!alert.valid ? {} : { display: "none" }}
            >
              {alert.alert}
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
