import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav.js';
import Logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => (
  <div className="header">
    <HeaderNav />
    <a href="#" className="header-logo">
      <img src={Logo} alt="Logo" />
    </a>
  </div>
);

export default Header;
