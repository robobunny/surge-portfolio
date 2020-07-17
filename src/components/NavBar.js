import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul className="container">
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/project" activeClassName="is-active" exact={true}>Projects</NavLink></li>
      <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
    </ul> 
  </nav>
);

export default NavBar;