import React, { useEffect, useState } from 'react'

import './SearchForm.css'
import loupe from '../../images/loupe.svg'

function SearchForm({ onSearch, setShowOnlyShort, initialText, showOnlyShort }) {
  const [searchText, setSearchText] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchText);
  }
  useEffect(() => {
    setSearchText(initialText);
  }, [initialText])

  return (
    <section className="search" aria-label="Поиск по фильмам">
      <div className="search__content">
        <form className="search__form"
          onSubmit={handleSubmit}>
          <input
            className="search__input"
            placeholder="Фильм"
            type="text"
            minLength={0}
            maxLength={50}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
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
          <div className="search__box">
            <label className="switch" htmlFor="checkbox">
              <input
                checked={showOnlyShort}
                onChange={(event) => setShowOnlyShort(event.target.checked)}
                type="checkbox"
                id="checkbox" />
              <div className="slider round"></div>
            </label>
            <p className="search__text">Короткометражки</p>
          </div>
        </form>
      </div >
    </section >
  )
}

export default SearchForm