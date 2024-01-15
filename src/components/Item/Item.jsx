import React, { memo, useContext } from 'react'
import "./Item.scss"
import { Link } from 'react-router-dom'
import { FaRegHeart  } from "react-icons/fa";
import {  useShopContext } from '../../Context/ShopContext';


const Item = ({id, name, description, imgSrc, price}) =>  {

  const { Data, wishlistItems, cartItems, addToWishlist, addToCart } = useShopContext();
  
  return (
    <>

            <div className="single-item">
              <div className="item-img">
                  <Link to={`/product/${id}`}><img src={imgSrc} alt="" /></Link>
              </div>
              <div className="item-details">
                  <p className='item-name'>{name}</p>
                  <p className='item-desc'>{description}</p>
                  <div className="price">
                  <p className='item-price p'>${price}.99</p>
                  <p className='discount p'>${price - 15}</p>
                  <p className='offer-percent p'>{price - 10}%</p>
                  <div className="wishlist-icon" onClick={() => addToWishlist({id, name, description, imgSrc, price})}>
                    <FaRegHeart  />
                  </div>
                  </div>

              </div>
            </div>
    </>

  )
}

export default Item
