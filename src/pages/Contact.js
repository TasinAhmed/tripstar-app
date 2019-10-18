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
        </div>
        <img className="img-fluid" src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
