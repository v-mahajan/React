import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe to newsletter</button>
        </div>
    </div>
  )
}

export default NewsLetter;
