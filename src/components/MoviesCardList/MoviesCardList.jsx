import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard';
import PreloaderRound from '../PreloaderRound/PreloaderRound';
import './MoviesCardList.css';

function MoviesCardList({ movies, isLoading, errorMessage, onClick }) {
  if (isLoading) return (
    <PreloaderRound />
  )
  if (errorMessage) return (
    <div className="gallery">
      <div className="gallery__message">
        <p>{errorMessage}</p>
      </div>
    </div>
  )
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
            trailerLink={movie.trailerLink}
            like={movie.like || false}
            onClick={onClick}
          />)}
      </ul>
    </section>
  )
}

export default MoviesCardList