const PORTFOLIOLINKS = [
  {
    id: 1,
    name: 'Статичный сайт',
    // link: 'https://kybikn.github.io/how-to-learn/',
  },
  {
    id: 2,
    name: 'Адаптивный сайт',
    // link: 'https://kybikn.github.io/russian-travel/',
  },
  {
    id: 3,
    name: 'Одностраничное приложение',
    // link: 'https://mesto-kybikn.nomoredomains.monster/',
  },
];

const FOOTERLINKS = [
  {
    id: 1,
    name: 'Яндекс.Практикум',
    // link: 'https://practicum.yandex.ru/',
  },
  {
    id: 2,
    name: 'Github',
    // link: 'https://github.com/kybikn',
  },
];

const BASEURLS = {
  // mainApi: 'https://api.movies-kybikn.nomoredomains.rocks',
  mainApi: 'http://localhost:3000',
  moviesApi: 'https://api.nomoreparties.co',
};

const ERRORMESSAGES = {
  text: 'Нужно ввести ключевое слово',
  // network: `Во время запроса произошла ошибка.
  // Возможно, проблема с соединением или сервер недоступен.
  // Подождите немного и попробуйте ещё раз`,
  // notFound: 'Ничего не найдено',
  // success: 'Вы успешно зарегистрировались!',
  // editProfileSuccess: 'Профиль успешно обновлен!',
  // error: 'Что-то пошло не так! Попробуйте ещё раз.',
  // profileError: 'При обновлении профиля произошла ошибка.',
};

module.exports = {
  PORTFOLIOLINKS,
  FOOTERLINKS,
  BASEURLS,
  ERRORMESSAGES,
};
