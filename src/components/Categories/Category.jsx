import React from 'react'
import "./Categories.scss"
import Img from '../LazyLoading/Img'

const Category = ({ imgSrc, title}) => {

  
  
  return (
      <div className="category-banner">
        <Img src={imgSrc} className='category-img' />
        <div className="category-button">
            <h1>{title}</h1>
            <button className="button detail-btn">
                See Details
            </button>
        </div>
      </div>
  )
}

export default Category
