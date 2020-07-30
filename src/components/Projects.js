import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Magic8Bunny from '../components/Magic8Bunny';
import ProjectNav from "./ProjectNav.js";
import Weather from '../components/Weather';

const Projects = () => (
  <BrowserRouter>
    <div className="body-article">
      <h1>Projects</h1>
      <p>Pick a project to see more:</p>
      <ProjectNav />
      <Route
      path="/project/magic8bunny"
      component={Magic8Bunny}
      />
      <Route
        path="/project/weather"
        component={Weather}
      />
    </div>
  </BrowserRouter>
);

export default Projects;