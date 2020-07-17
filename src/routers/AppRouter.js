import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import NavBar from '../components/NavBar';
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <NavBar />
      <div className="container">
        <Switch>
          <Route 
            path="/"
            component={Home}
            exact={true}
          />
          <Route
            path="/project"
            component={Projects}
          />
          <Route
            path="/contact"
            component={Contact}
          />
          <Route
            component={NotFound}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;