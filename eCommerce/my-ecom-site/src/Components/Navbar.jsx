import React from 'react'
import logo from '../images/logo.webp';
import cartIcon from '../images/cart.webp';
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt='image failed'/>
          <p>Home Decor</p>
        </div>
        <div >
            <ul className="navbar-list">
                <li>Home <hr /></li>
                <li>Office</li>
                <li>Outdoor Living</li>
            </ul>
        </div>
        <div className="navbar-login-cart">
          <button>Login</button>
          <img src={cartIcon} alt="cart icon failed to load"/>
          <div className='navbar-cart-count'>0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
