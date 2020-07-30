import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const PhoneNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="phone-nav">
      <button hidden={isOpen} onClick={()=>{setIsOpen(true)}}>
        ▼
      </button>
      <div hidden={!isOpen} className="phone-nav">
        <ul className="phone-nav">
          <li><NavLink to="/" className="nav" activeClassName="is-active" exact={true}>Home</NavLink></li>
          <li><NavLink to="/bio" className="nav" activeClassName="is-active" exact={true}>About</NavLink></li>
          <li><NavLink to="/project" className="nav" activeClassName="is-active" exact={true}>Projects</NavLink></li>
          <li><NavLink to="/contact" className="nav" activeClassName="is-active">Contact</NavLink></li>
        </ul>
        <button onClick={() => { setIsOpen(false) }}>
          ▲
        </button>
      </div>
    </nav>
  )
}

export default PhoneNav;