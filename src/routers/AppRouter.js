import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
// import NotFound from "../components/NotFound";
import Projects from "../components/Projects";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route 
            path="/"
            component={Home}
            exact={true}
          />
          <Route
            path='/bio'
            component={About}
          />
          <Route
            path="/project"
            component={Projects}
          />
          <Route
            path="/contact"
            component={Contact}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;