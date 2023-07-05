import React from 'react'
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import './Header.css';

function Header({ loggedIn }) {
  const location = useLocation();
  const mainPage = location.pathname === '/';

  return (
    <header className={`header ${mainPage ? 'header_type_main' : 'header_type_movies'}`}>
      <div className="header__container">
        <Logo />
        {loggedIn ? <NavigationMovies /> : <Navigation />}
      </div>
    </header >
  )
}

export default Header
