import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";


const StarRating = ({ ratingStars}) => {

    const [rating, setRating] = useState(ratingStars);
    
    const stars = Array(5).fill(0)


  return (
    <div className='rating' style={{textAlign:'left'}}>
    {stars.map((_, index) => (
      <CiStar
        key={index}
        style={{ cursor: 'pointer',fontSize:'18px', color: index < rating ? 'gold' : 'gray' }}
      />
    ))}
    <span>{`(${rating}.6)`}</span>
    <span>{`${rating * 193} Reviews `}</span>
  </div>
  )
}

export default StarRating
