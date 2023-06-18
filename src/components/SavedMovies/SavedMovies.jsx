import React from 'react'

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedDevider from '../SavedDevider/SavedDevider';
import { savedMovies } from '../../mockData/saved-movies';

function SavedMovies() {
  return (
    <div>
      <SearchForm />
      <MoviesCardList movies={savedMovies} type="savedMovies" />
      <SavedDevider />
    </div>
  )
}

export default SavedMovies