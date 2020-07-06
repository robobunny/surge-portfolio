import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Bunny Money</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">New Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </nav>
  </header>
)

export default Header;