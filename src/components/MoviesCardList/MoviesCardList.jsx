import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <section className="gallery" aria-label="Галерея карточек">
      <ul className="gallery__list">
        {movies.map((movie) =>
          <MoviesCard
            key={movie.movieId}
            nameRU={movie.nameRU}
            duration={movie.duration}
            imageUrl={movie.image}
          />)}
      </ul>
    </section>
  )
}

export default MoviesCardList