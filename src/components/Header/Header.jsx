import React from 'react'
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <Navigation />
      </div>
    </section >
  )
}

export default Header
