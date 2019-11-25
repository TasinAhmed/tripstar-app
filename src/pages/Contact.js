import React, { useState } from "react";
import { Helmet } from "react-helmet";
import contactImg from "../images/contact.svg";
import app from "../config/firebase";

const Contact = () => {
  const [user, setUser] = useState(null);

  app.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
    }
  });

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
              style={user !== null ? { display: "none" } : null}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control cont-email"
              name="cEmail"
              required
              style={user !== null ? { display: "none" } : null}
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-control subject"
              name="cSubject"
              required
            />
            <textarea
              className="form-control"
              rows="7"
              placeholder="Message"
              required
              name="cMessage"
            ></textarea>
            <button className="btn btn-primary" type="submit">
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
