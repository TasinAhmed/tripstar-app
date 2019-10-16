import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";

function App() {
  return (
    <>
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
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
