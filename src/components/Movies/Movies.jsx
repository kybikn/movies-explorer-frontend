import React, { useEffect, useState } from 'react'

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';
import mainApi from '../../utils/api/MainApi';
import { useBreakpoints } from '../../hooks/useWidth';
import {
  BASE_URLS,
  ERROR_MESSAGES,
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  LARGE_SCREEN,
  MAX_SHORT_MOVIE_DURATION
} from '../../utils/constants';
import { formatMovies, filterMovies, addLikeToMovieInList, deleteLikeToMovieInList } from '../../utils/moviesUtils';

function Movies() {
  const [movies, setMovies] = useState(
    () => {
      let moviesToShow = localStorage.getItem('movies');
      return moviesToShow
        ? JSON.parse(moviesToShow)
        : [];
    }
  );
  const [showOnlyShort, setShowOnlyShort] = useState(() => {
    let showOnlyShort = localStorage.getItem('showOnlyShort');
    return showOnlyShort
      ? JSON.parse(showOnlyShort)
      : false;
  });
  const [searchText, setSearchText] = useState(() => {
    let searchText = localStorage.getItem('searchText');
    return searchText
      ? searchText
      : '';
  });
  const [more, setMore] = useState(0); //сколько доп рядов показывать
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [noMore, setNoMore] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  let { small, medium, large } = useBreakpoints({
    small: {
      min: SMALL_SCREEN.MIN_SIZE,
      max: SMALL_SCREEN.MAX_SIZE
    },
    medium: {
      min: MEDIUM_SCREEN.MIN_SIZE,
      max: MEDIUM_SCREEN.MAX_SIZE
    },
    large: {
      min: LARGE_SCREEN.MIN_SIZE,
      max: LARGE_SCREEN.MAX_SIZE
    },
  });

  let cardsAmount;
  let toAddMore;
  if (small) {
    cardsAmount = SMALL_SCREEN.CARDS_AMOUNT;
    toAddMore = SMALL_SCREEN.CARDS_TO_ADD
  };
  if (medium) {
    cardsAmount = MEDIUM_SCREEN.CARDS_AMOUNT;
    toAddMore = MEDIUM_SCREEN.CARDS_TO_ADD
  }
  if (large) {
    cardsAmount = LARGE_SCREEN.CARDS_AMOUNT;
    toAddMore = LARGE_SCREEN.CARDS_TO_ADD
  }

  function handleMore() {
    setMore(more + 1);
  }

  function handleSearch(searchText) {
    if (!searchText || !searchText.trim()) {
      setErrorMessage(ERROR_MESSAGES.TEXT)
    } else {
      setIsLoading(true);
      Promise.all([moviesApi.getInitialMovies(), mainApi.getMovies()])
        .then(([initialMovies, savedMovies]) => {
          const formattedMovies = formatMovies(initialMovies, BASE_URLS.MOVIES_API);
          let results = filterMovies(formattedMovies, searchText);
          if (results.length === 0) {
            setErrorMessage(ERROR_MESSAGES.NOT_FOUND);
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
          setErrorMessage(ERROR_MESSAGES.NETWORK);
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
    document.title = "Movies - фильмы";
  }, []);

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
      ? movies.filter(movie => movie.duration <= MAX_SHORT_MOVIE_DURATION)
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