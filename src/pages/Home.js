import React from "react";
import { Helmet } from "react-helmet";
import "../styles/homeStyle.css";
import hero from "../images/hero.svg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TripStar | Home</title>
      </Helmet>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="content">
            <h1 class="display-4">Trips Made Simple.</h1>
            <p class="lead">
              Discover over 1000+ reviews right at your fingertips. Find the
              perfect destination for your next trip!
            </p>
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Get Started
            </a>
          </div>
          <img src={hero} class="img-fluid" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Home;
