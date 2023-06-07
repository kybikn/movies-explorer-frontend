import React from 'react'
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <Navigation />
      </div>
    </header >
  )
}

export default Header
