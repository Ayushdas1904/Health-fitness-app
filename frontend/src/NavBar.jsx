import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Style/navbar.css';
import homeImg from './assets/home.png';
import foodImg from './assets/food.svg';
import storeImg from './assets/store.svg';
import profileImg from './assets/profile.svg';
import logo from './assets/fitbuddy-logo-black.png'

function NavBar() {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const indicatorRef = useRef(null);
    const navItemsRef = useRef([]);

    useEffect(() => {
        // Determine the active index based on the current path
        switch (location.pathname) {
            case '/food':
                setActiveIndex(1);
                break;
            case '/store':
                setActiveIndex(2);
                break;
            case '/profile':
                setActiveIndex(3);
                break;
            default:
                setActiveIndex(0);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (navItemsRef.current[activeIndex]) {
            const activeItem = navItemsRef.current[activeIndex];
            const indicator = indicatorRef.current;
            if (indicator && activeItem) {
                const itemRect = activeItem.getBoundingClientRect();
                const containerRect = activeItem.parentNode.getBoundingClientRect();

                // Calculate the left position relative to the parent container
                const leftPosition = itemRect.left - containerRect.left + itemRect.width / 2;

                indicator.style.transform = `translateX(${leftPosition}px)`;
            }
        }
    }, [activeIndex]);

    return (
        <div className="main-page">
            <div className="logo">
                <Link to="/home">
                    <img className='invert' src={logo} alt="no image loaded" />
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav-content">
                    <li className="nav-list" ref={(el) => navItemsRef.current[0] = el}>
                        <Link to="/home" className={`link-item ${activeIndex === 0 ? 'active' : ''}`}>
                            <img src={homeImg} className='link-icons invert' alt="Home" />
                            <span className="link-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-list" ref={(el) => navItemsRef.current[1] = el}>
                        <Link to="/food" className={`link-item ${activeIndex === 1 ? 'active' : ''}`}>
                            <img src={foodImg} className='link-icons invert' alt="Food" />
                            <span className="link-text">Food</span>
                        </Link>
                    </li>
                    <li className="nav-list" ref={(el) => navItemsRef.current[2] = el}>
                        <Link to="/store" className={`link-item ${activeIndex === 2 ? 'active' : ''}`}>
                            <img src={storeImg} className='link-icons invert' alt="Store" />
                            <span className="link-text">Store</span>
                        </Link>
                    </li>
                    {/* <li className="nav-list" ref={(el) => navItemsRef.current[3] = el}>
                        <Link to="/profile" className={`link-item ${activeIndex === 3 ? 'active' : ''}`}>
                            <img src={profileImg} className='link-icons invert' alt="My Profile" />
                            <span className="link-text">My Profile</span>
                        </Link>
                    </li> */}
                    <span className="indicator" ref={indicatorRef}></span>
                </ul>
            </nav>
            <div className="signing">
                <Link to="/login" >
                    <div className="login">Login</div>
                </Link>
                <Link to="/signup"  >
                    <div className="sign-up">Sign Up</div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
