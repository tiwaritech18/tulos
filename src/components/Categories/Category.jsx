import React from 'react'
import "./Categories.scss"

const Category = ({ imgSrc, title, category}) => {

  
  
  return (
      <div className="category-banner">
        <img src={imgSrc} alt="" />
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
