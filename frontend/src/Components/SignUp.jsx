import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/login.css';
import testImage from '../assets/test.png';
import logo from '../assets/fitbuddy-logo-black.png';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('User registered successfully!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  useEffect(() => {
    document.body.style.background = `url(${testImage}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backdropFilter = `blur(5px)`;

    // document.querySelector(".logo").style.position = 'absolute';
    // document.querySelector(".logo").style.left = '0px';
    document.querySelector(".main-page").style.left = '0px';
    document.querySelector(".logo").style.left = '0px';

    return () => {
      document.body.style.background = ''; // Reset to default
      document.querySelector(".logo").style.position = '';
      document.querySelector(".logo").style.left = '';
    };
  }, []);

  return (
    <>
      
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>SignUp</h2>
          <div className="input-field">
            <input
              value={name}
              onChange={handleChange(setName)}
              type="text"
              name="name"
              required
            />
            <label>Enter your name</label>
          </div>
          <div className="input-field">
            <input
              value={email}
              onChange={handleChange(setEmail)}
              type="email"
              name="email"
              required
            />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input
              value={password}
              onChange={handleChange(setPassword)}
              type="password"
              name="password"
              required
            />
            <label>Enter your password</label>
          </div>
          <div className="input-field">
            <input
              value={confirmPassword}
              onChange={handleChange(setConfirmPassword)}
              type="password"
              name="confirmPassword"
              required
            />
            <label>Confirm your password</label>
          </div>
          {/* <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
          </div> */}
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="no image loaded" />
        </Link>
      </div>
    </>
  );
}
