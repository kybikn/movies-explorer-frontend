import React from 'react'
import { Link } from 'react-router-dom';

import NavigationMovies from '../NavigationMovies/NavigationMovies';
import './HeaderMovies.css';
import logo from '../../images/logo.svg'


function HeaderMovies() {
  return (
    <header className="header-movies">
      <div className="header-movies__container">
        <Link to='/'>
          <img
            className='header__img hover'
            src={logo}
            alt="Логотип">
          </img>
        </Link>
        <NavigationMovies />
      </div>
    </header >
  )
}

export default HeaderMovies