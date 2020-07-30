import React from 'react';
import { NavLink } from 'react-router-dom'
      
const ProjectNav = () => (
  <nav className="project-nav">
    <ul className="nav">
      <li><NavLink to="/project/magic8bunny" className="nav project-nav-link" activeClassName="is-active">Magic 8 Bunny</NavLink></li>
      <li><NavLink to="/project/weather" className="nav project-nav-link" activeClassName="is-active">Weather App</NavLink></li>
    </ul> 
  </nav>
);

export default ProjectNav;