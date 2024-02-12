import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../images/StarIconGlowing.png'
import star_dull_icon from '../../images/StarIconDull.png'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" width='20px' height='20px'/>
                <img src={star_icon} alt="" width='20px' height='20px'/>
                <img src={star_icon} alt="" width='20px' height='20px'/>
                <img src={star_icon} alt="" width='20px' height='20px'/>
                <img src={star_dull_icon} alt="" width='20px' height='20px'/>
            </div>

        </div>
    </div>
  )
}
export default ProductDisplay;