import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Project from "./Project.js";
import ProjectNav from "./ProjectNav.js"

const Projects = () => (
  <BrowserRouter>
    <div className="body-article">
      <h1>Projects</h1>
      <p>This is the Projects page</p>
      <ProjectNav />
      <Route
      path="/project/:id"
      component={Project}
      />
    </div>
  </BrowserRouter>
);

export default Projects;