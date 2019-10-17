import React from "react";
import "../styles/footStyle.css";
import footImg from "../images/footer.svg";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="title brand display-4">TripStar</div>
        <div className="navigation">
          <div className="title">NAVIGATION</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/reviews/">Reviews</a>
            </li>
            <li>
              <a href="/gallery/">Gallery</a>
            </li>
            <li>
              <a href="/contact/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <div className="title">SIGN UP FOR OUR NEWSLETTER</div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <img src={footImg} className="img-fluid" alt="" />
        <div className="copyright">
          &copy;2019 TripStar All Rights Reserved. Designed by{" "}
          <span className="name">Tasin Ahmed</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
