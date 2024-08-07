import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img
        src={assets.logo}
        className='logo'
        alt='Majus Enterprise Logo'
      />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>
          Home
        </li>
        <li onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>
          Menu
        </li>
        <li onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>
          Mobile-App
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>
          Contact Us
        </li>
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
