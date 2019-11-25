import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import Object from "./pages/Object";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./config/auth";
import PrivateRoute from "./config/PrivateRoute";
import PublicRoute from "./config/PublicRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/location/" component={Location} />
          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/contact/" component={Contact} />
          <PublicRoute exact path="/login/" component={Login} />
          <PublicRoute exact path="/signup/" component={Signup} />
          <Route exact path="/results/" component={Results} />
          <Route exact path="/object/" component={Object} />
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
