import React from 'react'
import './Footer.css'
import footer_logo from '../../images/logoBest.png'
import instagram_icon from '../../images/Instagram_logo.png'
import whatsapp_icon from '../../images/WhatsApp.png'
import pinterest_icon from '../../images/PinterestLogo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>HOME DECOR</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" height='45px' width='45px' />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""  height='50px' width='50px'/>
            </div>
    
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" width='50px' height='50px'/>
            </div>    
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
