import React, { useEffect, useState } from 'react'

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';
import mainApi from '../../utils/api/MainApi';
import { useBreakpoints } from '../../hooks/useWidth';
import { baseUrls, errorMessages } from '../../utils/constants';
import { formatMovies, filterMovies, addLikeToMovieInList, deleteLikeToMovieInList } from '../../utils/moviesUtils';

function Movies() {
  const [movies, setMovies] = useState(
    () => {
      let moviesToShow = localStorage.getItem('movies');
      return moviesToShow ? JSON.parse(moviesToShow) : [];
    }
  );
  const [showOnlyShort, setShowOnlyShort] = useState(() => {
    let showOnlyShort = localStorage.getItem('showOnlyShort');
    return showOnlyShort ? JSON.parse(showOnlyShort) : false;
  });
  const [searchText, setSearchText] = useState(() => {
    let searchText = localStorage.getItem('searchText');
    return searchText ? searchText : '';
  });
  const [more, setMore] = useState(0); //сколько доп рядов показывать
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [noMore, setNoMore] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  let { s, m, l } = useBreakpoints({
    s: { min: 0, max: 767 },
    m: { min: 768, max: 1279 },
    l: { min: 1280, max: null },
  });

  let cardsAmount;
  let toAddMore;
  if (s) { cardsAmount = 5; toAddMore = 2 };
  if (m) { cardsAmount = 8; toAddMore = 2 }
  if (l) { cardsAmount = 12; toAddMore = 3 }

  function handleMore() {
    setMore(more + 1);
  }

  function handleSearch(searchText) {
    if (!searchText || !searchText.trim()) {
      setErrorMessage(errorMessages.text)
    } else {
      setIsLoading(true);
      Promise.all([moviesApi.getInitialMovies(), mainApi.getMovies()])
        .then(([initialMovies, savedMovies]) => {
          const formattedMovies = formatMovies(initialMovies, baseUrls.moviesApi);
          let results = filterMovies(formattedMovies, searchText);
          if (results.length === 0) {
            setErrorMessage(errorMessages.notFound);
            return
          };

          // Обогащение лайками
          const savedIds = savedMovies.map(movie => movie.movieId);
          const resultwWithLikes = results.map(movie => {
            movie.like = savedIds.includes(movie.movieId)
              ? true
              : false;
            return movie
          })
          setSearchText(searchText);
          setErrorMessage('');
          setMovies(resultwWithLikes);
          setMore(0);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(errorMessages.network);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  function toggleLike(id) {
    let movie = movies.find(movie => movie.movieId === id);
    if (movie.like) {
      mainApi.deleteMovie(id)
        .then(() => {
          const updateMovies = deleteLikeToMovieInList(movies, id);
          setMovies(updateMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      mainApi.createMovie(movie)
        .then(
          () => {
            const updateMovies = addLikeToMovieInList(movies, id)
            setMovies(updateMovies);
          }
        )
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    localStorage.setItem('showOnlyShort', JSON.stringify(showOnlyShort));
  }, [showOnlyShort])

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText])

  useEffect(() => {
    const filteredMovies = showOnlyShort
      ? movies.filter(movie => movie.duration <= 40)
      : movies;
    const moviesToShow = filteredMovies.slice(0, cardsAmount + (toAddMore * more));
    if (moviesToShow.length === filteredMovies.length) {
      setNoMore(true)
    } else setNoMore(false)
    setMoviesToShow(moviesToShow);
  }, [cardsAmount, toAddMore, more, movies, showOnlyShort]);


  useEffect(() => {
    if (isLoading
      || moviesToShow.length === 0
      || moviesToShow.length === movies.length
      || errorMessage
      || noMore) {
      setShowPreloader(false)
    } else setShowPreloader(true);
  }, [errorMessage, isLoading, movies.length, moviesToShow.length, noMore])

  return (
    <div>
      <SearchForm
        onSearch={handleSearch}
        setShowOnlyShort={setShowOnlyShort}
        initialText={searchText}
        showOnlyShort={showOnlyShort}
      />
      <MoviesCardList
        movies={moviesToShow}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onClick={toggleLike} />
      {showPreloader
        ? <Preloader onClick={handleMore} />
        : null}
    </div>
  )
}

export default Movies