import React, { useState } from 'react'
import "./PagesStyles/Cart.scss"
import { BsArrowLeft } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import "./PagesStyles/Cart.scss";
import { useShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/Emptycart/EmptyCart';
import LazyImg from "../components/LazyLoading/Img"


const Cart = () => {
    const { cartItems, removeFromCart, setCartItems } = useShopContext();

    const increaseQuantity = (item) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
            setCartItems(updatedCart);
        }
    }


    const totalAmount = cartItems.reduce((accumulator, currentItem) => {
        const itemTotal = currentItem.price * currentItem.quantity;
        return accumulator + itemTotal;
    }, 0)

    return (

        <div className='cart'>
            <div className="cart-menu">
                <div className="cart-menu-bar">
                    {/* <p className='svg'>MENU</p> */}
                    <Link to='/man'>
                        <div className="back-to-text" style={{ color: 'black' }}>
                            <BsArrowLeft />
                            <span>BACK TO BROWSING</span>
                        </div>
                    </Link>
                </div>
            </div>
            <h4>Shopping Cart</h4>

            {cartItems.length === 0 ? <EmptyCart /> : cartItems.map((item) => (
                <div className="cart-item-container" key={item.id}>
                    <div className="cart-item">
                        <LazyImg src={item.imgSrc} alt={item.name} />
                        <div className="cart-item-details">
                            <h5>{item.name} x{item.quantity}</h5>
                            <p>price: ${item.price}.00</p>
                            <p>Size: Medium</p>
                        </div>
                    </div>
                    <div className="item-quantity">
                        <button style={{padding:'2px 6px', cursor:'pointer', fontSize:'20px',border:'none'}} onClick={() => decreaseQuantity(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button style={{padding:'2px 6px', cursor:'pointer', fontSize:'20px',border:'none'}} onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                    <div className="item-total">
                        <p>${item.price * item.quantity}</p>
                        <MdDeleteOutline onClick={() => removeFromCart(item.id)} />
                    </div>
                </div>
            ))}
            {cartItems.length === 0 ? '' : <div className="cart-checkout">
                <h4 style={{ textAlign: 'right' }}>Subtotal: ${totalAmount}</h4>
                <div className="checkout-btn-container">
                    <button className='button checkout-btn'>CHECKOUT NOW</button>
                </div>
            </div>}

        </div>
    )
}

export default Cart
