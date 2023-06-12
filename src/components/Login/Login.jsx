import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg'

function Login() {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    navigate('/movies', { replace: true })
  }

  return (
    <div className="main">
      <div className="auth__signin">
        <div className="header__logo">
          <img src={logo} alt="Логотип"></img>
        </div>
        <h2 className="auth__title">Рады видеть!</h2>
        <form
          className="auth__form"
          onSubmit={onSubmit}
        >
          <fieldset className="auth__box">
            <label className="auth__label">E-mail
              <input
                className="auth__input" placeholder='pochta@yandex.ru|'
                required />
              <span className="auth-error"></span>
            </label >
            <label className="auth__label">Пароль
              <input
                className="auth__input"
                required />
              <span className="auth-error">Что-то пошло не так...</span>
            </label >
            <button className="auth__button">
              Войти
            </button>
          </fieldset>
        </form>
        <div className='auth__footer'>
          <p className="auth__text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__link">Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default Login