import React from "react";
import Media from "react-media";
import BigNav from "./NavBar"
import PhoneNav from "./PhoneNav";
import Weather from "./Weather";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header">
      <Link to="/">
        <img src="bunny256.png" alt="robobunny logo" />
      </Link>
      <div className="header-info">
        <h2>William C. Duraney</h2>
        <p>Fullstack Javascript Developer</p>
      </div>
      <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px)",
      }}>
        {matches => (
          <div className="nav">
            {matches.small && <PhoneNav />}
            {matches.large && <BigNav />}
          </div>
        )}
      </Media>
    </div>
  </header>
)

export default Header;