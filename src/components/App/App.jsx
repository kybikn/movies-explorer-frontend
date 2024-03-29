import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext ';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import ForbiddenForAuthRoute from '../ForbiddenForAuthRoute/ForbiddenForAuthRoute';
import auth from '../../utils/auth';
import mainApi from '../../utils/api/MainApi';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../utils/constants';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoSuccess, setInfoSuccess] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState();

  const navigate = useNavigate();

  const location = useLocation();

  const mainPage = location.pathname === '/';
  const moviesPages = location.pathname === '/movies'
    || location.pathname === '/saved-movies';
  const profilePage = location.pathname === '/profile';

  const handleProfile = ({ name, email, callback }) => {
    mainApi
      .editProfile({
        name,
        email
      })
      .then((profile) => {
        setCurrentUser(profile);
        setInfoTooltipOpen(true);
        setInfoSuccess(true);
        setInfoMessage(SUCCESS_MESSAGES.EDIT_PROFILE);
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(ERROR_MESSAGES.PROFILE_ERROR)
        console.log(err);
      })
      .finally(() => callback());
  }

  function handleRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then((payload) => {
        if (payload.user) {
          setInfoTooltipOpen(true);
          setInfoSuccess(true);
          setInfoMessage(SUCCESS_MESSAGES.REGISTER);
          handleLogin({ email, password });
        }
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(ERROR_MESSAGES.ERROR)
        console.log(err);
      });
  }


  function handleLogin({ email, password }) {
    auth.login(email, password)
      .then((payload) => {
        if (payload.user) {
          setCurrentUser(payload.user);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(ERROR_MESSAGES.ERROR)
        console.log(err);
      });
  }

  function handleSignOut() {
    auth.logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser(null);
        if (!mainPage) navigate("/", { replace: true });
        localStorage.removeItem('showOnlyShort');
        localStorage.removeItem('movies');
        localStorage.removeItem('searchText');
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(ERROR_MESSAGES.ERROR)
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
          setCurrentUser(payload);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err)
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {mainPage || moviesPages || profilePage
          ? <Header
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
              setCurrentUser={setCurrentUser}
              onSignOut={handleSignOut}
              onProfile={handleProfile}
            />}
          />
          <Route
            path='/signup'
            element={<ForbiddenForAuthRoute
              element={Register}
              loggedIn={loggedIn}
              onRegister={handleRegister}
            />}
          />
          <Route
            path='/signin'
            element={<ForbiddenForAuthRoute
              element={Login}
              loggedIn={loggedIn}
              onLogin={handleLogin}
            />}
          />
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