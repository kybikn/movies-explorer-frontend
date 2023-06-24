import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext ';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import auth from '../../utils/auth';
import mainApi from '../../utils/api/MainApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoSuccess, setInfoSuccess] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState('');
  // const [movies, setMovies] = useState([]);
  // const [currentUser, setCurrentUser] = useState({
  //   email: 'pochta@yandex.ru',
  //   password: '123456',
  // });

  const navigate = useNavigate();

  const location = useLocation();

  const mainPage = location.pathname === '/';
  const moviesPages = location.pathname === '/movies'
    || location.pathname === '/saved-movies';
  const profilePage = location.pathname === '/profile';

  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi
      .editProfile({ name, email })
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then((payload) => {
        if (payload.user) {
          setInfoTooltipOpen(true);
          setInfoSuccess(true);
          setInfoMessage(`Вы успешно зарегистрировались!`);
          navigate('/signin', { replace: true });
        }
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(`Что-то пошло не так!
    Попробуйте ещё раз.`)
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    auth.login(email, password)
      .then((payload) => {
        if (payload.user) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(`Что-то пошло не так!
      Попробуйте ещё раз.`)
        console.log(err);
      });
  }

  function handleSignOut() {
    auth.logout()
      .then(() => {
        setLoggedIn(false);
        // setEmail('');
        setCurrentUser(null);
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(`Что-то пошло не так!
    Попробуйте ещё раз.`)
        console.log(err);
      })
  }

  function onClose() {
    setInfoTooltipOpen(false);
  }

  useEffect(() => {
    mainApi.getProfile()
      .then((payload) => {
        if (payload) {
          setLoggedIn(true);
          setCurrentUser(payload);
          navigate("/movies", { replace: true })
        }
      })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {mainPage || moviesPages || profilePage
          ? <Header
            onSignOut={handleSignOut}
            loggedIn={loggedIn}
          />
          : ''}
        <Routes>
          <Route
            path='/'
            loggedIn={loggedIn}
            element={<Main />}>
          </Route>
          <Route
            path='/movies'
            element={<ProtectedRouteElement
              element={Movies}
              loggedIn={loggedIn}
            />}
          ></Route>
          <Route
            path='/saved-movies'
            element={<ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
            />}
          />
          <Route
            path='/profile'
            element={<ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              isLoading={isLoading}
            />}
          />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />} />
          <Route
            path='/signin'
            element={<Login onLogin={handleLogin} />} />
          <Route
            path='*'
            element={<NotFound />}>
          </Route>
        </Routes>
        {mainPage || moviesPages ? < Footer /> : ''}
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={onClose}
          success={infoSuccess}
          message={infoMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App
