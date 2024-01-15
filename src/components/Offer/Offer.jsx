import React, { useState } from 'react'
import './Offer.scss'
import Container from '../Container/Container'

const Offer = () => {
  return (
    <Container>
        <div className="offer-container">
            <div className="offer-content-left">
                <h2>Grab Exclusive
                    <br /> Deals Offers </h2>
                    <p>amet consectetur adipisicing elit. Corporis at </p>
                    <button className='button offer-btn'>
                        Check Now
                    </button>
            </div>
            <div className="offer-content-right">
                <img src="" alt="" />
            </div>
        </div>
    </Container>
  )
}

export default Offer
