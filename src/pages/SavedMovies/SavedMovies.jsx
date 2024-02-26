import React, { useEffect, useState } from 'react'

import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SavedDevider from '../../components/SavedDevider/SavedDevider';
import mainApi from '../../utils/api/MainApi';
import { ERROR_MESSAGES } from '../../utils/constants';
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
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    document.title = "Movies - сохраненные фильмы";
  }, []);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((formattedMovies) => {
        if (formattedMovies.length === 0) {
          setErrorMessage(ERROR_MESSAGES.NOT_FOUND);
          return
        };
        setErrorMessage('');
        setAllMovies(formattedMovies);
        setMovies(formattedMovies);
      })
      .catch((err) => {
        setErrorMessage(ERROR_MESSAGES.NETWORK);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    const filteredMovies = !searchText
      ? allMovies
      : filterMovies(allMovies, searchText);
    const moviesToShow = showOnlyShort
      ? filteredMovies.filter(movie => movie.duration <= 40)
      : filteredMovies;
    setErrorMessage(moviesToShow.length
      ? ''
      : ERROR_MESSAGES.NOT_FOUND);
    setMoviesToShow(moviesToShow);
  }, [allMovies, movies, showOnlyShort, searchText]);

  return (
    <div>
      <SearchForm
        onSearch={handleSearch}
        setShowOnlyShort={setShowOnlyShort}
        initialText={searchText}
        showOnlyShort={showOnlyShort} />
      <MoviesCardList
        movies={moviesToShow}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onClick={handleDelete} />
      <SavedDevider />
    </div>
  )
}

export default SavedMovies