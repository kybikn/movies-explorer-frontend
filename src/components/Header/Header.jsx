import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  const location = useLocation();
  const mainPage = location.pathname === '/';

  return (
    <header className={`header ${mainPage ? "header-main" : "header-movies"}`}>
      <div className='header__container'>
        <Link to='/'>
          <img
            className='header__img hover'
            src={logo}
            alt="Логотип">
          </img>
        </Link>
        {mainPage ? <Navigation /> : <NavigationMovies />}
      </div>
    </header >
  )
}

export default Header
