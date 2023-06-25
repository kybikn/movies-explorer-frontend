import React from 'react'
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import './Header.css';

function Header() {
  const location = useLocation();
  const mainPage = location.pathname === '/';

  return (
    <header className={`header ${mainPage ? 'header_main' : 'header_movies'}`}>
      <div className="header__container">
        <Logo />
        {mainPage ? <Navigation /> : <NavigationMovies />}
      </div>
    </header >
  )
}

export default Header
