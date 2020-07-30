import React from 'react';
import { NavLink } from "react-router-dom";

const BigNav = () => (
  <nav>
    <ul className="nav">
      <li><NavLink to="/" className="nav" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/bio" className="nav" activeClassName="is-active" exact={true}>About</NavLink></li>
      <li><NavLink to="/project" className="nav" activeClassName="is-active" exact={true}>Projects</NavLink></li>
      <li><NavLink to="/contact" className="nav" activeClassName="is-active">Contact</NavLink></li>
    </ul> 
  </nav>
);

export default BigNav;