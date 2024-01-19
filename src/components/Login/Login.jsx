import React, { useReducer, useState } from 'react'
import "../../pages/PagesStyles/LoginSignup.scss";
import { SiGoogleanalytics } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialData = {
    email: '',
    password: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADDING_EMAIL":
            return { ...state, email: action.payload }
        case "ADDING_PASSWORD":
            return { ...state, password: action.payload }
        default:
            return state;
    }
}
const LOGIN_KEY = "userLoginData"
var notExistError = "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again."
console.log(notExistError);

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState({
        email: '',
        password: '',
        invalidUser: ''
    });
    const history = useNavigate()

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
        const { email, password } = state;
        const getUserDetail = localStorage.getItem(LOGIN_KEY);

        if (!email.includes("@")) {
            setError({ name: '', email: 'Email should be valid', password: '' });
        } else if (password.length < 6) {
            setError({ name: '', email: '', password: 'Password should be greater' });
        } else {
            if (getUserDetail && getUserDetail.length) {
                const user = JSON.parse(getUserDetail);
                const userLogin = user.filter((el, k) => {
                    return el.email === email && el.password === password;
                })
                if (userLogin.length === 0) {
                    setError({ email: '', password: '', invalidUser: notExistError })
                } else {
                    toast.success("Login Successfully")
                    history("/")
                }
            }









            setError({ email: '', password: '', invalidUser: '' })
            setUserData((prevUserData) => [...prevUserData, state]);
            // Clear input fields by resetting state to initialData
            dispatch({ type: "ADDING_EMAIL", payload: "" });
            dispatch({ type: "ADDING_PASSWORD", payload: "" });
        }
    };

    return (
        <>
            <p className={`${error.invalidUser ? "not-exist" : ''}`}>{error.invalidUser}</p>
            <div className='login-container'>
                <div className="form-container">

                    <div className="form-logo">
                        <SiGoogleanalytics />
                        <span>TULOS</span>
                    </div>
                    <div className="form-heading">
                        <h4>Login Now</h4>
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
                            Log In
                        </button>
                    </form>
                    <div className='additional-link'>
                        Don't have Tulos account?<Link to='/loginSignup'>Create Now</Link>
                    </div>
                </div>
                <div className="img-container"></div>
            </div>
        </>
    )
}

export default Login
