import React from 'react';
import './TopBar.css';
import logo from '../images/logo.png';
import { FaSearch } from 'react-icons/fa';

function TopBar() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
    };
    
    return (
        <div className='container'>
            <div className="top-bar">
                <div className="logo-container" onClick={scrollToTop}>
                    <img src={logo} alt="ThreadHub Logo" className="logo" />
                    <span className="app-name"><span className='app-name-colored'>Thread</span>Hub</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <FaSearch className="search-icon" />
                </div>
            </div>
        </div>
    );
  }

export default TopBar;
