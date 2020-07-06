import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <p>404'd!</p>
    <Link to="/">Go home</Link>
  </div>
)

export default NotFound;