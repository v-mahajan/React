import React from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../images/woodenTable.png'

export const CartItems = () => {
    const {alll_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon' />
                <p></p>
                <p></p>
                <button className="cartitems-quantity"></button>
                <p></p>
                <img src={remove_icon} onClick={()=>{removeFromCart()}} alt="" />
            </div>
        </div>
    </div>
  )
}
export default CartItems;