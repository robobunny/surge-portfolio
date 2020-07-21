import React from "react";
import { Link } from "react-router-dom";


const Header = () => (
  <header>
    <div className="header">
      <Link to="/">
        <img src="../../public/bunny256.png" alt="robobunny logo" />
      </Link>
      <div className="header-info">
        <h2>William C. Duraney</h2>
        <p>Fullstack Javascript Developer</p>
      </div>
      <button 
        className="cta-button"
      >Hire Me!</button>
    </div>
  </header>
)

export default Header;