import React from 'react';
import logo from '../logo.png';
import '../css/Header.css';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Rancid Tomatillos logo" />
      <h1>Rancid Tomatillos</h1>
    </div>
  );
}

export default Header;
