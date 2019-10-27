import React from "react";
import { Helmet } from "react-helmet";
import contactImg from "../images/contact.svg";

const Contact = () => {
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
              className="form-control cont-name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control cont-email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-control subject"
            />
            <textarea
              className="form-control"
              rows="7"
              placeholder="Message"
              required
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
