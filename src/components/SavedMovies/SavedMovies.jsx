import React, { useEffect, useState } from 'react'

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedDevider from '../SavedDevider/SavedDevider';
import mainApi from '../../utils/api/MainApi';
import { errorMessages } from '../../utils/constants';
import { filterMovies, deleteLikeToMovieInList } from '../../utils/moviesUtils';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showOnlyShort, setShowOnlyShort] = useState(false);

  function handleSearch(searchText) {
    setSearchText(searchText);
  }

  function handleDelete(id) {
    mainApi.deleteMovie(id)
      .then(() => {
        const updateMovies = allMovies.filter((movie) => movie.movieId !== id);
        setAllMovies(updateMovies);
        // обновляем список фильмов в localstorage(удаляем лайк у этого фильма)
        const moviesInStorage = JSON.parse(localStorage.getItem('movies'));
        const moviesNoLike = deleteLikeToMovieInList(moviesInStorage, id)
        localStorage.setItem('movies', JSON.stringify(moviesNoLike))
      }).catch((e) => console.log(e));
  }

  useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((formattedMovies) => {
        if (formattedMovies.length === 0) { setErrorMessage(errorMessages.notFound); return };
        setErrorMessage('');
        setAllMovies(formattedMovies);
        setMovies(formattedMovies);
      })
      .catch((err) => {
        setErrorMessage(errorMessages.network);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    const filteredMovies = !searchText ? allMovies : filterMovies(allMovies, searchText);
    const moviesToShow = showOnlyShort ? filteredMovies.filter(movie => movie.duration <= 40) : filteredMovies;
    setErrorMessage(moviesToShow.length ? '' : errorMessages.notFound);
    setMoviesToShow(moviesToShow);
  }, [allMovies, movies, showOnlyShort, searchText]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} setShowOnlyShort={setShowOnlyShort} initialText={searchText} showOnlyShort={showOnlyShort} />
      <MoviesCardList movies={moviesToShow} errorMessage={errorMessage} isLoading={isLoading} onClick={handleDelete} />
      <SavedDevider />
    </div>
  )
}

export default SavedMovies