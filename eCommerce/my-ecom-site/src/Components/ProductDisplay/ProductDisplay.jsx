import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../images/StarIconGlowing.png'
import star_dull_icon from '../../images/StarIconDull.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" width='100px' height='80px' />
                <img src={product.image} alt=""  width='100px' height='80px'/>
                <img src={product.image} alt=""  width='100px' height='80px'/>
                <img src={product.image} alt=""  width='100px' height='80px'/>
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" height='500px' width='500px'/>
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
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi nihil 
                doloribus modi numquam, repellat sit maiores sapiente tenetur accusamus similique veritatis voluptatum ut!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category: </span>women, T-shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</p>

        </div>
    </div>
  )
}
export default ProductDisplay;
