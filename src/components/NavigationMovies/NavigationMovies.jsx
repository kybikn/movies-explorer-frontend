import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './NavigationMovies.css'
import profile from '../../images/profile.svg'

function NavigationMovies() {
  const navigate = useNavigate();
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setBurgerOpen(!isBurgerOpen);
  }

  function handleMain(event) {
    event.preventDefault();
    navigate('/', { replace: true })
  }

  function handleMovies(event) {
    event.preventDefault();
    navigate('/movies', { replace: true })
  }

  function handleSavedMovies(event) {
    event.preventDefault();
    navigate('/saved-movies', { replace: true })
  }

  function handleProfile(event) {
    event.preventDefault();
    navigate('/profile', { replace: true })
  }

  return (
    <div>
      <div className={`burger ${isBurgerOpen && 'burger_active'} hover`}
        onClick={handleBurgerClick}>
        <span className="burger__line burger__line_up"></span>
        <span className="burger__line burger__line_middle"></span>
        <span className="burger__line burger__line_down"></span>
      </div>
      <div className={`navigation-movies ${isBurgerOpen && 'navigation-movies_visible'}`}>
        <ul className="navigation-movies__nav">
          <li>
            <NavLink
              to='/'
              className={`navigation-movies__link_hidden ${isBurgerOpen && 'navigation-movies__link_mobile hover'}`}
              onClick={handleMain}
            >Главная</NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className={`navigation-movies__link hover ${isBurgerOpen && 'navigation-movies__link_mobile border'}`}
              onClick={handleMovies}
            >Фильмы</NavLink>
          </li>
          <li>
            <NavLink
              to='/saved-movies'
              className={`navigation-movies__link hover ${isBurgerOpen && 'navigation-movies__link_mobile'}`}
              onClick={handleSavedMovies}
            >Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <NavLink
          to='/profile'
          className="navigation-movies__link_profile hover"
          onClick={handleProfile}
        ><img src={profile} alt="Профиль"></img>Аккаунт</NavLink>
      </div>
    </div>
  )
}

export default NavigationMovies