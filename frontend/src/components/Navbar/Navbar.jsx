import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link for navigation
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img
        src={assets.logo}
        className='logo'
        alt='Majus Enterprise Logo'
      />
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          onClick={() => { setMenu("home"); toggleMenu(); }} 
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a 
          href='#explore-menu' 
          onClick={() => { setMenu("menu"); toggleMenu(); }} 
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </a>
        <a 
          href='#app-download'  
          onClick={() => { setMenu("mobile-app"); toggleMenu(); }} 
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          Mobile-App
        </a>
        <a 
          href='#footer'  
          onClick={() => { setMenu("contact-us"); toggleMenu(); }} 
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </a>
      </ul>
      <div className='navbar-right'>
        <img
          src={assets.search_icon}
          className='search-icon'
          alt='Search Icon'
        />
        <div className='basket-container'>
          <img
            src={assets.basket_icon}
            className='basket-icon'
            alt='Basket Icon'
          />
          <div className='dot'></div>
        </div>
        <button className='sign-in-button'>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
