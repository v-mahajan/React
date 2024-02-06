import React from 'react'
import logo from '../images/logo.jpeg';

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt='image failed'/>
        </div>
        <div className="navbar-list">
            <ul>
                <li>Home</li>
                <li>Office</li>
                <li>Outdoor Living</li>
            </ul>
        </div>
        <div className="navbar-login"></div>
        <div className="navbar-cart"></div>
      </div>

    </div>
  )
}

export default Navbar;
