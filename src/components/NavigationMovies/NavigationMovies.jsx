import { React, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import './NavigationMovies.css'
import profile from '../../images/profile.svg'



function NavigationMovies() {
  const location = useLocation();

  const mainPage = location.pathname === '/';
  const movies = location.pathname === '/movies'
  const savedMovies = location.pathname === '/saved-movies'

  const navigate = useNavigate();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const burgerRef = useRef(null);

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

  function handleBurgerClick() {
    setBurgerOpen(!isBurgerOpen);
  }

  useEffect(() => {
    if (!isBurgerOpen) {
      return
    };

    function handleOverlay(e) {
      if ((e.target || e.current.target) !== burgerRef.current) {
        setBurgerOpen(!isBurgerOpen);
      }
    }

    function closeByEscape(e) {
      if (e.key === 'Escape') {
        setBurgerOpen(!isBurgerOpen);
      }
    }



    const handleOverlayTimeOut = setTimeout(() => document.addEventListener('click', handleOverlay), 300)
    document.addEventListener('keydown', closeByEscape)

    return () => {
      clearTimeout(handleOverlayTimeOut);
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', handleOverlay)
    }
  }, [isBurgerOpen])

  return (
    <div>
      <div className={`burger ${isBurgerOpen && 'burger_active'} hover`}
        onClick={handleBurgerClick}>
        <span className="burger__line burger__line_up"></span>
        <span className="burger__line burger__line_middle"></span>
        <span className="burger__line burger__line_down"></span>
      </div>
      <div
        ref={burgerRef}
        className={`navigation-movies ${isBurgerOpen && 'navigation-movies_visible'}`}>
        <ul className="navigation-movies__nav"
        >
          <li>
            <NavLink
              to='/'
              className={`navigation-movies__link_hidden ${isBurgerOpen && 'navigation-movies__link_mobile hover'} ${mainPage && 'border'}`}
              onClick={handleMain}
            >Главная</NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className={`navigation-movies__link hover ${isBurgerOpen && 'navigation-movies__link_mobile'} ${movies && 'border'}`}
              onClick={handleMovies}
            >Фильмы</NavLink>
          </li>
          <li>
            <NavLink
              to='/saved-movies'
              className={`navigation-movies__link hover ${isBurgerOpen && 'navigation-movies__link_mobile'} ${savedMovies && 'border'}`}
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