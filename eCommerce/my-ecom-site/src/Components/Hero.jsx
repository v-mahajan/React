import React from 'react'
import './Hero.css'
import hero_image from '../images/Subject.png'
import hand_icon from '../images/handAI.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW INVENTORY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon}></img>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
               
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero;