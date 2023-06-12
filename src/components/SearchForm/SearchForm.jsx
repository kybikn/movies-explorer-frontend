import React from 'react'

import './SearchForm.css'
import loupe from '../../images/loupe.svg'

function SearchForm() {
  return (
    <section className='search' aria-label="Поиск по фильмам">
      <div className='search__content'>
        <form className='search__form'>
          <div>
            <input
              className='search__input'
              placeholder='Фильм'
              type="text"
              required />
            <img className='search__img' src={loupe} alt="Лупа"></img>
            <button
              className='search__button'
              type='submit'>Найти
            </button>
          </div>
          <div className='search__box'>
            <label class="switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <div class="slider round"></div>
            </label>
            <p className='search__text'>Короткометражки</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchForm