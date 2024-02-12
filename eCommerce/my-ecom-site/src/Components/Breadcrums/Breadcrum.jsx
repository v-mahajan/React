import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../images/rightArrow.png'

export const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrum'>
        HOME PAGE <img src={arrow_icon} alt="" width='10px' height='10px'/> SHOP <img src={arrow_icon} alt="" width='10px' height='10px' /> {product.category} <img src={arrow_icon} alt="" width='10px' height='10px' />{product.name}
    </div>
  )
}
export default Breadcrum;