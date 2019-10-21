import React from "react";
import { Helmet } from "react-helmet";
import hero from "../images/hero.svg";
import User from "../classes/User";

console.log("Hello");

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TripStar | Home</title>
      </Helmet>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="content">
            <h1 className="display-4">Trips Made Simple.</h1>
            <p className="lead">
              Discover over 1000+ reviews right at your fingertips. Find the
              perfect destination for your next big trip!
            </p>
            <a className="btn btn-primary btn-lg" href="/signup/" role="button">
              Get Started
            </a>
          </div>
          <img src={hero} className="img-fluid" alt="" />
        </div>
      </header>
      <section className="traits container">
        <div className="up-to-date">Up-To-Date</div>
        <div className="unbiased">
          <i className="fas fa-star-half-alt"></i>
          <p>Unbiased Reviews</p>
        </div>
        <div className="in-depth">In-Depth</div>
      </section>
    </div>
  );
};

export default Home;
