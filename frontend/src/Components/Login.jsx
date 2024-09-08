import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/login.css';
import testImage from '../assets/test.png';
import logo from '../assets/fitbuddy-logo-black.png'

export default function Login() {
  useEffect(() => {
    // Set the background color and image when the Login page is loaded
    document.body.style.background = `url(${testImage}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backdropFilter = `blur(5px)`;

    document.querySelector(".logo").style.position = 'absolute';
    document.querySelector(".logo").style.left = '0px';


    return () => {
      // Reset the background when leaving the page
      document.body.style.background = ''; // Reset to default
      document.querySelector(".logo").style.position = '';
      document.querySelector(".logo").style.left = '';


    };
  }, []);

  return (
    <>
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="no image loaded" />
        </Link>
      </div>
      <div className="wrapper">
        <form action="#">
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type="password" required />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <label for="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>

        </form>
      </div>
    </>
  );
}
