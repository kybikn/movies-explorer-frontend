import { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
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
  // const [currentUser, setCurrentUser] = useState();
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoSuccess, setInfoSuccess] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const mainPage = location.pathname === '/';
  const moviesPages = location.pathname === '/movies'
    || location.pathname === '/saved-movies';

  function handleRegister({ name, email, password }) {
    setInfoTooltipOpen(true);
    setInfoSuccess(true);
    setInfoMessage(`Вы успешно зарегистрировались!`);
    navigate('/signin', { replace: true });
  }

  function handleLogin({ email, password }) {
    setLoggedIn(true);
    navigate('/movies', { replace: true });
  }

  function onClose() {
    setInfoTooltipOpen(false);
  }

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      {mainPage || moviesPages ? <Header /> : ''}
      <Routes>
        <Route
          path='/'
          loggedIn={loggedIn}
          element={<Main />}>
        </Route>
        {/* <Route
          path='/'
          element={<ProtectedRouteElement
            element={Main}
          />}
        ></Route> */}
        <Route
          path='/movies'
          element={<Movies />}>
        </Route>
        <Route
          path='/saved-movies'
          element={<SavedMovies />}>
        </Route>
        <Route
          path='/profile'
          element={<Profile />} />
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
    // </CurrentUserContext.Provider>
  );
}

export default App
