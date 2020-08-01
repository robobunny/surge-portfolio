import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="body-article">
    <h1>Page Not Found</h1>
    <p>Those daggone 404's ate my turnips again!</p>
    <p>Better hop on back <Link to="/">home</Link>.</p>
  </div>
)

export default NotFound;