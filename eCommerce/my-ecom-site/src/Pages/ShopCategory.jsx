import  React from 'react'
import { useContext } from 'react'
import './CSS/ShopCategory.css'
import All_product from '../Data/AllProducts'
import { ShopContext} from '../Context/ShopContext'
import Item from '../Components/items/item'
import dropdown_icon from '../images/dropDown.png'


export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=""  width='100%' height='15%'/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""  width='20px' height='10px'/>
        </div>
      </div>
      <div className="shopcategory-products">
        {All_product.map((item, i) => {

          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;