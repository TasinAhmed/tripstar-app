import React from "react";
import { Helmet } from "react-helmet";
import hero from "../images/hero.svg";
import { User } from "../classes/User";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const Home = () => {
  let tasin = new User("Tasin Ahmed", "tasin123@gmail.com");
  console.log(tasin);

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
        <div className="up-to-date">
          <MdUpdate />
          <h5>Up-To-Date</h5>
        </div>
        <div className="unbiased">
          <MdRateReview />
          <h5>Unbiased Reviews</h5>
        </div>
        <div className="in-depth">
          <AiOutlineFileSearch />
          <h5>In-Depth</h5>
        </div>
      </section>
    </div>
  );
};

export default Home;
