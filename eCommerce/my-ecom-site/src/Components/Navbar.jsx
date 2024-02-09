import React from 'react'
import logo from '../images/logo.webp';
import cartIcon from '../images/cart.webp';
import './Navbar.css'
import {useState} from 'react'

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt='image failed'/>
          <p>Home Decor</p>
        </div>
        <div >
            <ul className="navbar-list">
                <li onClick={()=> {setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("Office")}}>Office{menu==="Office"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("Outdoor Living")}}>Outdoor Living{menu==="Outdoor Living"?<hr/>:<></>}</li>
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
