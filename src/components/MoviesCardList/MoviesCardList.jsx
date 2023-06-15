import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, type }) {
  return (
    <section className='gallery' aria-label="Галерея карточек">
      <ul className='gallery__list'>
        {movies.map((movie) =>
          <MoviesCard
            key={movie.movieId}
            nameRU={movie.nameRU}
            duration={movie.duration}
            imageUrl={movie.image}
            type={type}
          />)}
      </ul>
    </section>
  )
}

export default MoviesCardList