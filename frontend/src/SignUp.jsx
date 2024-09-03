import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import testImage from './assets/test.png'

export default function SignUp() {

    useEffect(() => {
        // Set the background color or image when the Login page is loaded
        document.body.style.background = `url(${testImage}) no-repeat center center fixed, #000`; 
        document.body.style.backgroundSize = 'cover';
    
        return () => {
          // Reset the background when leaving the page
          document.body.style.backgroundColor = ''; // Reset to default
          // document.body.style.backgroundImage = '';
        };
      }, []);

    return (
        <div class="wrapper">
            <form action="#">
                <h2>SignUp</h2>
                <div class="input-field">
                    <input type="text" required />
                    <label>Enter your name</label>
                </div>
                <div class="input-field">
                    <input type="text" required />
                    <label>Enter your email</label>
                </div>
                <div class="input-field">
                    <input type="password" required />
                    <label>Enter your password</label>
                </div>
                <div class="input-field">
                    <input type="password" required />
                    <label>Confirm your password</label>
                </div>
                <div class="forget">
                    <label for="remember">
                        <input type="checkbox" id="remember" />
                        <p>Remember me</p>
                    </label>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )

}