import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../pages/PagesStyles/LoginSignup.scss"
import { FcGoogle } from "react-icons/fc";
import { SiGoogleanalytics } from "react-icons/si";

const LoginSignup = () => {

  const [haveAccount, setHaveAccount] = useState(false);


  return (
    <div className='login-container'>
      <div className="form-container">
        <div className="form-logo">  
        {/* logo */}
        <SiGoogleanalytics />
        <span>TULOS</span>
        </div>
        <div className="form-heading">
          <h4>Register or Login Now</h4>
          <p>Stay updated with new products.</p>
        </div>
        <div className="google-btn">
          Sign in with Google
          <FcGoogle />
        </div>
        <hr />
        <form action="submit" className='form'>
          {!haveAccount && <input type="text" placeholder='Enter Your Name' />}
          <input type="text" placeholder='Enter Your Email' />
          <input type="text" placeholder='Enter Your Password' />
          <button className='button sign-up-btn'>
            {haveAccount ? 'Login' : 'Create Account'}</button>
        </form>
        {haveAccount ? 'Welcome Back!!' : <div className='additional-link'>
          Already have an account?<Link to=''>Login Here</Link>
        </div> }
      </div>
      <div className="img-container"></div>
    </div>
  )
}

export default LoginSignup;
