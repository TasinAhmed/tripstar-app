import React, { useState } from "react";
import { Helmet } from "react-helmet";
import contactImg from "../images/contact.svg";

const Contact = () => {
  let key;
  let valid = true;

  const [contact, setContact] = useState({
    cName: "",
    cEmail: "",
    cSubject: "",
    cMessage: ""
  });

  const [alert, setAlert] = useState({
    alert: [],
    valid: true
  });

  const changeHandler = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    let temp = [];
    key = 0;

    alert.alert.length = 0;

    if (
      contact.cEmail === "" ||
      contact.cName === "" ||
      contact.cMessage === ""
    ) {
      valid = false;
      key++;
      temp.push(<li key={key}>Fields cannot be empty</li>);
    }

    setAlert({
      alert: temp,
      valid: valid
    });
  };

  return (
    <div>
      <Helmet>
        <title>TripStar | Contact</title>
      </Helmet>
      <div className="contact-wrap container">
        <div className="contact">
          <h4>Contact Us at TripStar</h4>
          <form action="">
            <input
              type="text"
              placeholder="Name"
              name="cName"
              className="form-control cont-name"
              required
              onChange={changeHandler}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control cont-email"
              name="cEmail"
              required
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Subject (Optional)"
              className="form-control subject"
              name="cSubject"
              onChange={changeHandler}
            />
            <textarea
              className="form-control"
              rows="7"
              placeholder="Message"
              required
              name="cMessage"
              onChange={changeHandler}
            ></textarea>
            <div
              className="alert alert-danger"
              style={!alert.valid ? {} : { display: "none" }}
              role="alert"
            >
              {alert.alert}
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-primary"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <img className="img-fluid" src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
