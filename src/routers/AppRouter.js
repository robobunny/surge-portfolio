import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Dashboard = () => (
  <div>
    <p>This is the dashboard</p>
  </div>
);

const Create = () => (
  <div>
    <p>This is the create Page</p>
  </div>
);

const Edit = () => (
  <div>
    <p>This is the edit page</p>
  </div>
);

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

const Help = () => (
  <div>
    <p>This is the help page</p>
  </div>
);

const NotFound = () => (
  <div>
    <p>404'd!</p>
    <Link to="/">Go home</Link>
  </div>
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route 
          path="/"
          component={Dashboard}
          exact={true}
        />
        <Route
          path="/create"
          component={Create}
        />
        <Route
          path="/edit"
          component={Edit}
        />
        <Route
          path="/help"
          component={Help}
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;