import React from 'react'
import "./ProductDisplay.scss"
import Container from '../Container/Container'
import StarRating from '../Rating/StarRating'
import Size from '../Size/Size'
import { useShopContext } from '../../Context/ShopContext'
import LazyImg from "../LazyLoading/Img"

const ProductDisplay = ({ product }) => {

  const { addToCart } = useShopContext();
  // console.log(toastMsg)
const smallImgs = new Array(4).fill(0);
console.log(smallImgs);
  return (
    <Container>

      <div className='product-container'>
        <div className="product-img">
          <LazyImg className='main-img' src={product.imgSrc} alt="" />
          <div className="product-alternate-imgs">
            {smallImgs.map((i) => {
              return <LazyImg src={product.imgSrc} alt="image"/>
            })}
          </div>
        </div>

        <div className="product-detail-container">
          <div className="product-desc">
            <h3>{product.name}</h3>
            <p>
              <span className='line-through'>${product.price - 100}.00</span>
              <span className='actual-price'>${product.price}</span>
              <span className='offer'>50% Desc</span>
            </p>
            <h5>Description</h5>
            <p>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur nulla magnam accusamus  aut earum dignissimos maiores nihil ea.</p>

            <StarRating ratingStars={product.rating} />
            <Size product={product} />
            <div className="buttons">
              <button onClick={() => addToCart(product)} className='button add-to-cart'>Add To Cart</button>
              <button className='button checkout'>Checkout Now</button>
            </div>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default ProductDisplay
