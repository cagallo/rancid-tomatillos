import React from 'react';
import fullLogo from '../Rancid-Tomatillos-oneline.png';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={fullLogo} alt="Rancid Tomatillos logo"/>
    </div>
  );
}

export default Header;
