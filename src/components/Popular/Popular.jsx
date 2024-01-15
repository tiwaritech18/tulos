import React from 'react'
import "./Popular.scss";
import Container from '../Container/Container';
import Products from "../Assets/Collection";
import Item from '../Item/Item';

const Popular = () => {
  return (
    <Container>
        <div className="collection">
            <h1>NEW COLLECTION</h1>
            <p>Our latest collection where classic and contemponany styles converge in <br /> perfect harmony.</p>
            <div className="collection-items">

              {Products.map((product, i) => {
              return (
                <div className="collection-item" key={i}> 
                  <Item {...product}/>
                </div>
              )
              })}
            </div>
        </div>
    </Container>
  )
}

export default Popular
