import React, { useContext } from 'react'
import { useShopContext} from "../Context/ShopContext";
import Item from "../components/Item/Item";
import "./PagesStyles/ShopCategory.scss";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';


const ShopCategory = (props) => {
  const {Data} = useShopContext();


  return (
<div className='shop-category-container'>
    <div className="shop-category-header">
      <Breadcrumb />
    </div>
      <div className="shop-category">
        {Data.map((item, i) => {
          if(props.category === item.category){
            return (
            <div key={i}>
              <Item id={item.id} name={item.name} imgSrc={item.imgSrc}  description={item.description} price={item.price} />
            </div>
        )}else{
            return null;
          }
        })}
      </div>
      </div>
  )
}

export default ShopCategory
