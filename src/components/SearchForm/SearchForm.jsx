import React from 'react'
import './SearchForm.css'
import loupe from '../../images/loupe.svg'
import tumb from '../../images/tumb.svg'

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__content'>
        <form className='search__form'>
          <div>
            <input className='search__input' type="text" placeholder='Фильм' />
            <img className='search__img' src={loupe} alt="Лупа"></img>
            <button className='search__button'>Найти</button>
          </div>
          <div className='search__box'>
            <img src={tumb} alt="Чекбокс"></img>
            {/* <label className='toggler__wrapper'>
            <input type="checkbox" />
            <div className='toggler__slider'>
              <div className='toggler__dot'></div>
            </div>
          </label> */}
            <p className='search__text'>Короткометражки</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchForm