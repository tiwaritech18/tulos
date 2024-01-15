import React, {useState} from 'react'
import Item from "../Item/Item";
import "./SimilarProduct.scss";
import ReactSimplyCarousel from 'react-simply-carousel';
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";



const SimilarProduct = ({similarProducts}) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const headingCategory = similarProducts[0].category;

  return (
    <div className='similar-products'>
        <h3>Similar item related to {headingCategory}</h3>
        <div className="similar-product-items">


        <ReactSimplyCarousel 
                   activeSlideIndex={activeSlideIndex}
                   onRequestChange={setActiveSlideIndex}
                   itemsToShow={1}
                   itemsToScroll={1}
                   forwardBtnProps={{
                     //here you can also pass className, or any other button element attributes
                     style: {
                        alignSelf: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        width: 30,
                     },
                     children: <span>{<SlArrowRight />}</span>,
                   }}
                   backwardBtnProps={{
                     //here you can also pass className, or any other button element attributes
                     style: {
                       alignSelf: 'center',
                       border: 'none',
                       cursor: 'pointer',
                       fontSize: '20px',
                       width: 30,
                     },
                     children: <span>{<SlArrowLeft />}</span>,
                   }}
                   responsiveProps={[
                     {
                       itemsToShow: 4,
                       itemsToScroll: 2,
                       minWidth: 768,
                     },
                   ]}
                   speed={400}
                   easing="linear">
        {similarProducts.map((product) => (
            <Item key={product.id} id={product.id} imgSrc={product.imgSrc} name={product.name} price={product.price} />
            ))}
        </ReactSimplyCarousel>
        </div>
    </div>
  )
}

export default SimilarProduct
