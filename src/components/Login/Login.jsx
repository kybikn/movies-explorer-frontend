import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="auth__signin">
      <div className="header__logo"></div>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form">
        <fieldset className="auth__box">
          <label className="auth__label">E-mail
            <input
              className="auth__input"
              required />
            <span className="auth-error"></span>
          </label >
          <label className="auth__label">Пароль
            <input
              className="auth__input"
              required />
            <span className="auth-error">Что-то пошло не так...</span>
          </label >
          <button className="auth__button">Войти</button>
        </fieldset>
      </form>
      <div className='auth__footer'>
        <p className="auth__text">Ещё не зарегистрированы?</p>
        <Link to="/" className="auth__link">Регистрация</Link>
      </div>
    </div>
  )
}

export default Login