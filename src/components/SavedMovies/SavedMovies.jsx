import React, { useEffect, useState } from 'react'
import { useBreakpoints } from '../../hooks/useWidth';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedDevider from '../SavedDevider/SavedDevider';
import { savedMovies } from '../../mockData/savedMovies';

function SavedMovies() {
  const [movies, setMovies] = useState([]);

  let { s, m } = useBreakpoints({
    s: { min: 0, max: 767 },
    m: { min: 768, max: null },
  });

  let cardsAmount;
  if (s) cardsAmount = 2;
  if (m) cardsAmount = 3;

  useEffect(() => {
    const moviesToShow = savedMovies.slice(0, cardsAmount);
    setMovies(moviesToShow)
  }, [cardsAmount]);

  return (
    <div>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <SavedDevider />
    </div>
  )
}

export default SavedMovies