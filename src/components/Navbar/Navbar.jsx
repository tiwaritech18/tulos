import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { FaFirefoxBrowser, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { CgEventbrite } from "react-icons/cg";

import { IoMdClose } from "react-icons/io";
import Container from "../Container/Container"
import "./Navbar.scss"
import { useShopContext } from '../../Context/ShopContext';


const navlinks = [
    {
        id:1,
        title:'Man',
        to:'/man',
    },
    {
        id:2,
        title:'Women',
        to:'/women',
    },
    {
        id:3,
        title:'Kids',
        to:'/kid',
    },
    {
        id:4,
        title:'Shop',
        to:'/',
    },
]
const Navbar = () => {
    const {cartItems} = useShopContext()
    const [showMenuList, setShowMenuList] = useState(false);

    const handleShowMenu = () => {
        setShowMenuList(true)
    }

    const handleHideMenu = () => {
        setShowMenuList(false)
    }
  return (
    <Container>

    <div className='navbar'>
        <div className="left-nav-content">
            <FiMenu onClick={handleShowMenu} title='menu' />
            <ul className={showMenuList ? 'show-unordered-list' : 'unordered-list'}><li>
                    <div className="mobile-nav-header">
                        <CgEventbrite />
                        <IoMdClose className='close-icon' onClick={handleHideMenu} />
                    </div>
                </li>
                {navlinks.map((link) => (
                <li key={link.id} onClick={handleHideMenu}>
                    <Link to={link.to}>{link.title}</Link>
                </li>
                ))}
                <li>
                    <div className="social-icons">
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaGithub />
                        </li>
                    </div>
                </li>
            </ul>
        </div>
        
            <div className="brand">
            <Link to='/'>
                <h3>TULOS</h3>
            </Link>
            </div>
        
        <div className="right-nav-content">
            <Link to='/browse'>
                <FaFirefoxBrowser title='browse'/>
            </Link>
            <Link to="/cart">
                <div className="cart-icon">
                    <div className="product-counter">
                        {cartItems.length === 0 ? '' : cartItems.length}
                    </div>
                    <FiShoppingCart title='cart' />
                </div>
            </Link>
            <button className='login-btn'>
                <Link to='/loginsignup'>Login</Link>
            </button>
        </div>
    </div>
    </Container>
  )
}

export default Navbar
