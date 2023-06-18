import React, { useEffect, useState } from 'react'
import { useBreakpoints } from '../../hooks/useWidth';
import { beatfilmMovies, baseUrl } from '../../mockData/movies';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [more, setMore] = useState(0);

  function formatMovies(moviesToFormat) {
    const formattedMovies = moviesToFormat.map(movie => {
      return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: baseUrl + movie.image.url,
        thumbnail: baseUrl + movie.image.formats.thumbnail,
        movieId: movie.id
      }
    })
    return formattedMovies
  }

  let { s, m, l } = useBreakpoints({
    s: { min: 0, max: 767 },
    m: { min: 768, max: 1279 },
    l: { min: 1280, max: null },
  });

  let cardsAmount = 12;
  if (s) cardsAmount = 5;
  if (m) cardsAmount = 8;
  if (l) cardsAmount = 12;

  function handleMore() {
    setMore(more + 1);
  }

  useEffect(() => {
    const formattedMovies = formatMovies(beatfilmMovies);
    const moviesToShow = formattedMovies.slice(0, cardsAmount * (1 + more));
    setMovies(moviesToShow)
  }, [cardsAmount, more]);

  return (
    <div>
      <SearchForm />
      <MoviesCardList movies={movies} type='allMovies' />
      <Preloader onClick={handleMore} />
    </div>
  )
}

export default Movies