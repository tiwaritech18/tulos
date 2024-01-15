import React, { useState } from 'react'

const Size = ({product}) => {
    const clothSizes = ['S', 'M', 'L', 'XL'];
    const shoeSizes =['5','6', '7', '8'];

    const [activeIndex, setActiveIndex] = useState(2);

    const handleActiveness = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    function showSizes(sizes){
        return sizes.map((size,index) => (
            <span 
                key={size} 
                className={`size-item ${index === activeIndex ? 'active' : ''}`} onClick={() => {handleActiveness(index)}}>
                {size}
            </span>
        ));
    }

  return (
    <div className='size'>
        <h5 style={{fontSize:'15px', margin:'5px'}}>Size</h5>
        {product.itemCategory === 'cloth' && showSizes(clothSizes)}
        {product.itemCategory === 'shoe' && showSizes(shoeSizes)}
    </div>
  )
}

export default Size
