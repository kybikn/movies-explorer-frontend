const { REACT_APP_MAIN_API } = process.env;

const BASE_URLS = {
  MAIN_API: REACT_APP_MAIN_API || 'https://api.movies-kybikn.nomoredomains.rocks',
  MOVIES_API: 'https://api.nomoreparties.co',
};

const ERROR_MESSAGES = {
  TEXT: 'Нужно ввести ключевое слово',
  NETWORK: `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`,
  NOT_FOUND: 'Ничего не найдено',
  ERROR: 'Что-то пошло не так! Попробуйте ещё раз.',
  PROFILE_ERROR: 'При обновлении профиля произошла ошибка.',
  NOT_EMPTY: 'Это поле не должно быть пустым!',
  NAME_ERROR: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис!',
  EMAIL_ERROR: 'Неверный формат почты!',
};

const SUCCESS_MESSAGES = {
  REGISTER: 'Вы успешно зарегистрировались!',
  EDIT_PROFILE: 'Профиль успешно обновлен!',
}

const SMALL_SCREEN = {
  CARDS_AMOUNT: 5,
  CARDS_TO_ADD: 2,
  MIN_SIZE: 0,
  MAX_SIZE: 767
}

const MEDIUM_SCREEN = {
  CARDS_AMOUNT: 8,
  CARDS_TO_ADD: 2,
  MIN_SIZE: 768,
  MAX_SIZE: 1279
}

const LARGE_SCREEN = {
  CARDS_AMOUNT: 12,
  CARDS_TO_ADD: 3,
  MIN_SIZE: 1280,
  MAX_SIZE: null
}

const REGEX_EMAIL = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;

const MAX_SHORT_MOVIE_DURATION = 40;

const YOUTUBE_ID_REGEX = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

export {
  BASE_URLS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  LARGE_SCREEN,
  REGEX_EMAIL,
  MAX_SHORT_MOVIE_DURATION,
  YOUTUBE_ID_REGEX
};
