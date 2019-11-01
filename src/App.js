import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviews/">
          <Reviews />
        </Route>
        <Route exact path="/gallery/">
          <Gallery />
        </Route>
        <Route exact path="/contact/">
          <Contact />
        </Route>
        <Route exact path="/login/">
          <Login />
        </Route>
        <Route exact path="/signup/">
          <Signup />
        </Route>
        <Route exact path="/results/">
          <Results />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
