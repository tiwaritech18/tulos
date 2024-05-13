import "./Categories.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Category = ({ imgSrc, title}) => {

  
  
  return (
      <div className="category-banner">
        <LazyLoadImage src={imgSrc} className='category-img' />
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
