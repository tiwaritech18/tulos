import React from 'react';
import Container from "../Container/Container"
import "./Hero.scss"

const Hero = () => {

  return (
      <Container>
    <div className='hero'>
      <div className="hero-content">
        <div className="left-hero-content">
          <h2><span className='alternate-heading'>TULOS</span> SPRING COLLECTION</h2>
          <p>Find our best spring collection. Offering our best quality product in a Tulos <br /> Spring Collection.</p>
        </div>
        <div className="right-hero-content">
          <button className='button shop-btn'>Buy Now</button>
        </div>
      </div>
    </div>
      </Container>
  );
};

export default Hero;
