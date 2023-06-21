import React from 'react'

import './SearchForm.css'
import loupe from '../../images/loupe.svg'

function SearchForm() {
  return (
    <section className="search" aria-label="Поиск по фильмам">
      <div className="search__content">
        <form className="search__form">
          <div>
            <input
              className="search__input"
              placeholder="Фильм"
              type="text"
              minLength={3}
              maxLength={60}
              required />
            <img
              className="search__img"
              src={loupe}
              alt="Лупа">
            </img>
            <button
              className="search__button hover"
              type="submit"
              area-label="Найти фильм">Найти
            </button>
          </div>
          <div className="search__box">
            <label className="switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
            <p className="search__text">Короткометражки</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchForm