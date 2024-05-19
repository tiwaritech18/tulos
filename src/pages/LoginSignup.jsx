import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import "../pages/PagesStyles/LoginSignup.scss"
import { FcGoogle } from "react-icons/fc";
import { SiGoogleanalytics } from "react-icons/si";
import { toast } from 'react-toastify';

const initialData = {
  name: '',
  email: '',
  password: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDING_NAME":
      return { ...state, name: action.payload }
    case "ADDING_EMAIL":
      return { ...state, email: action.payload }
    case "ADDING_PASSWORD":
      return { ...state, password: action.payload }
    default:
      return state;
  }
}
const LOGIN_KEY = "userLoginData"
const LoginSignup = () => {

  const [state, dispatch] = useReducer(reducer, initialData);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChangeName = (e) => {
    dispatch({ type: "ADDING_NAME", payload: e.target.value });
    setError({ ...error, name: '' }); // Clear the name error
  };

  const handleChangeEmail = (e) => {
    dispatch({ type: "ADDING_EMAIL", payload: e.target.value });
    setError({ ...error, email: '' }); // Clear the email error
  };

  const handleChangePassword = (e) => {
    dispatch({ type: "ADDING_PASSWORD", payload: e.target.value });
    setError({ ...error, password: '' }); // Clear the password error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;

    if (name === "") {
      setError({ name: 'Name cannot be empty', email: '', password: '' })
    } else if (!email.includes("@")) {
      setError({ name: '', email: 'Email should be valid', password: '' });
    } else if (password.length < 6) {
      setError({ name: '', email: '', password: 'Password should be greater' });
    } else {
      setError({ name: '', email: '', password: '' });
      setUserData((prevUserData) => [...prevUserData, state]);

      // Update local storage
      // localStorage.setItem(LOGIN_KEY, JSON.stringify([...userData, state]));
      toast.success('Account Created Successfully');
      // Clear input fields by resetting state to initialData
      dispatch({ type: "ADDING_NAME", payload: "" });
      dispatch({ type: "ADDING_EMAIL", payload: "" });
      dispatch({ type: "ADDING_PASSWORD", payload: "" });
      console.log('form submitted', state);
    }
  };



  return (
    <div className='login-container'>
      <div className="form-container">
        <div className="form-logo">
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
        <form action="submit" className='form' onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={state.name}
            onChange={handleChangeName} />
          <p className={`error ${error.name ? "danger" : ''}`}> <sup>*</sup> {error.name}</p>
          <input
            type="text"
            placeholder='Enter Your Email'
            name='email'
            value={state.email}
            onChange={handleChangeEmail} />
          <p className={`error ${error.email ? "danger" : ''}`}> <sup>*</sup> {error.email}</p>
          <input
            type="password"
            placeholder='Enter Your Password'
            name='password'
            value={state.password}
            onChange={handleChangePassword}
            className='password' />
          <p className={`error ${error.password ? "danger" : ''}`}> <sup>*</sup> {error.password}</p>

          <button className='button sign-up-btn'>
            Create Account'</button>
        </form>
        <div className='additional-link'>
          Already have an account?<Link to='/login'>Login Here</Link>
        </div>
      </div>
      <div className="img-container"></div>
    </div>
  )
}

export default LoginSignup;
