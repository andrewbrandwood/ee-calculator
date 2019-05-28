import React from 'react';
import logo from '../../logo.svg';
import './header.scss';

function Header(){
  return (
    <header className="calculator__header">
      <div className="calculator__header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="calculator__header-title">Calculator</div>
    </header>
  );
}

export default Header;
