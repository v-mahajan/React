import React, {useContext} from 'react'
import logo from '../images/logoBest.png';
import cartIcon from '../images/cart.webp';
import './Navbar.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt='image failed'/>
          <p>Home Decor</p>
        </div>
        <div className='navbar-list-div'>
            <ul className="navbar-list">
                <li onClick={() => {setMenu("Shop")}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("Home")}}><Link to='/home' style={{textDecoration: 'none'}}>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("Office")}}><Link to='/office' style={{textDecoration: 'none'}}>Office</Link>{menu==="Office"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("Outdoor Living")}}><Link to='/outdoorliving' style={{textDecoration: 'none'}}>Outdoor Living</Link>{menu==="Outdoor Living"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="navbar-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cartIcon} alt="cart icon failed to load"/></Link>
          <div className='navbar-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
