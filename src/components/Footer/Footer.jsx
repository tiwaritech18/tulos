import React from 'react'
import "./Footer.scss"
import Container from '../Container/Container'
import { FaRegCopyright } from "react-icons/fa";

import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import FooterList from './FooterList';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    const socialIcons = [
        {
            id:1,
            icon:<FiInstagram />
        },{
            id:2,
            icon:<FiFacebook />
        },{
            id:3,
            icon:<FiTwitter />
        },{
            id:4,
            icon:<FiGithub />
        }
    ]
  return (
    <>
    
    <div className='footer'>
        <div className="newsletter-container">
            <h1>TULOS</h1>
            <p>Get newsletter updates for upcoming product <br />
                and best discount</p>
            <div className="subscribe-container">
                <input type="text" placeholder='Your Email' />
                <button className='button submit-btn'>Submit</button>
            </div>
        </div>
        <div className="footer-links">
            <FooterList title="Product" listItem={['Tshirt', 'Jacket', 'Shoes', 'Sunglasses']} />
            <FooterList title="Categories" listItem={['Man', 'Woman', 'Kids', 'New Arrival']} />
            <FooterList title="Social Media" listItem={['Instagram', 'Twitter', 'Youtbe', 'Facebook']} />
        </div>

    </div>
        <div className="copyright-container">
            <div className="copyright">
                <h5> <FaRegCopyright />  <span>{year}</span> Rohit.dev</h5>
            </div>
            <div className="social-icons">
                {socialIcons.map((icon) => (
                    <div key={icon.id} className="social-icon">
                        {icon.icon}
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Footer
