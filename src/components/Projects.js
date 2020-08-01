import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Magic8Bunny from '../components/Magic8Bunny';
import Portfolio from '../components/Portfolio';
import ProjectNav from "./ProjectNav.js";
import Weather from '../components/Weather';

const Projects = () => (
  <BrowserRouter>
    <div className="body-article">
      <h1>Projects</h1>
      <p>I have been learning to code in my spare time while working full-time as a manager at a commercial landscape company. I've built these projects using tutorials from around the web, especially on FreeCodeCamp and Andrew Mead's courses on Udemy.</p>
      <p>Pick a project below to see more:</p>
      <ProjectNav />
      <Route
      path="/project/magic8bunny"
      component={Magic8Bunny}
      />
      <Route
        path="/project/weather"
        component={Weather}
      />
      <Route
        path="/project/portfolio"
        component={Portfolio}
      />
    </div>
  </BrowserRouter>
);

export default Projects;