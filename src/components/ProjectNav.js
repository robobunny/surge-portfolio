import React from 'react';
import { NavLink } from 'react-router-dom'
      
const ProjectNav = () => (
  <nav className="project-nav">
    <ul className="container">
      <li><NavLink to="/project/1" className="project-nav-link" activeClassName="is-active">Project 1</NavLink></li>
      <li><NavLink to="/project/2" className="project-nav-link" activeClassName="is-active">Project 2</NavLink></li>
    </ul> 
  </nav>
);

export default ProjectNav;