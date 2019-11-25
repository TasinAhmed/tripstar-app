import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import signImg from "../images/signup.svg";
import app from "../config/firebase";
import { withRouter } from "react-router-dom";

const Signup = ({ history }) => {
  let key;

  const [signup, setSignup] = useState({
    sfName: "",
    slName: "",
    sEmail: "",
    sPass: "",
    sPhone: ""
  });

  const [alert, setAlert] = useState({
    alert: [],
    valid: true
  });

  const changeHandler = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = useCallback(async e => {
    e.preventDefault();
    let temp = [];
    key = 0;
    let valid = true;

    alert.alert.length = 0;

    if (
      signup.sfName === "" ||
      signup.slName === "" ||
      signup.sPass === "" ||
      signup.sEmail === ""
    ) {
      valid = false;
      key++;
      temp.push(<li key={key}>Fields cannot be empty</li>);
    }

    if (signup.sPass !== "") {
      if (!/(?=.*[a-z])/.test(signup.sPass)) {
        valid = false;
        key++;
        temp.push(
          <li key={key}>Password must contain at least 1 lowercase letter</li>
        );
      }

      if (!/(?=.*[A-Z])/.test(signup.sPass)) {
        valid = false;
        key++;
        temp.push(
          <li key={key}>Password must contain at least 1 capital letter</li>
        );
      }

      if (!/(?=.*[0-9])/.test(signup.sPass)) {
        valid = false;
        key++;
        temp.push(<li key={key}>Password must contain at least 1 number</li>);
      }

      if (!/(?=.*[!@#\$%\^&\*])/.test(signup.sPass)) {
        valid = false;
        key++;
        temp.push(
          <li key={key}>Password must contain at least 1 special character</li>
        );
      }

      if (signup.sPass.length < 6 || signup.sPass.length > 15) {
        valid = false;
        key++;
        temp.push(
          <li key={key}>Password must be between 6 to 15 characters long</li>
        );
      }
    }

    setAlert({
      alert: temp,
      valid: valid
    });

    if (valid === true) {
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(signup.sEmail, signup.sPass);
        app.auth().onAuthStateChanged(user => {
          if (user) {
            history.push("/");
            app
              .firestore()
              .collection("user")
              .add({
                email: signup.sEmail,
                f_name: signup.sfName,
                l_name: signup.slName,
                password: signup.sPass,
                phone: signup.sPhone,
                user_id: user.uid
              });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

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

export default withRouter(Signup);
