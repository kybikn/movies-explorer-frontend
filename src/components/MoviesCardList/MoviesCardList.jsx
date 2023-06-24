import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isLoading, errorMessage, onClick }) {
  // if (isLoading) return (<div className="gallery__loading-message">Поиск...</div>)
  if (isLoading) return (
    <div className="preloader__container">
      <span className="preloader__round"></span>
    </div>)
  if (errorMessage) return (<div className="gallery__error-message">{errorMessage}</div>)
  return (
    <section className="gallery" aria-label="Галерея карточек">
      <ul className="gallery__list">
        {movies.map((movie) =>
          <MoviesCard
            key={movie.movieId}
            movieId={movie.movieId}
            nameRU={movie.nameRU}
            duration={movie.duration}
            imageUrl={movie.image}
            like={movie.like || false}
            onClick={onClick}
          />)}
      </ul>
    </section>
  )
}

export default MoviesCardList