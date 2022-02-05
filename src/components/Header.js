import React from 'react';
import logo from '../logo.png';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Rancid Tomatillos logo" />
      <h1 className="page-title">Rancid Tomatillos</h1>
    </div>
  );
}

export default Header;
