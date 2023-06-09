// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route
          path='/'
          element={<Main />}
        ></Route>
        <Route
          path='/movies'
          element={<Movies />}
        ></Route>
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route path="/signin" element={<Login
        />} />
        <Route
          path='*'
          element={<NotFound />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
