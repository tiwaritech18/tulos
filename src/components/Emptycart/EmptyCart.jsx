import React from 'react'
import emptyCartImg from "../Assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
      <img src={emptyCartImg} alt="empty cart" />
    </div>
  )
}

export default EmptyCart
